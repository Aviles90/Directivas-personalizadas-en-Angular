import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  miFormulario: FormGroup =  this.fb.group({
    nombre:['', Validators.required]
  });

  texto1: string = 'Angel';
  color: string = 'red';

  constructor( private fb: FormBuilder) { }

  tieneError(campo : string):boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiar(){
    this.texto1 = 'Juan Carlos';
  }

  cambiarColor(){
    this.color = 'green';
  }

}
