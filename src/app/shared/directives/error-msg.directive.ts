import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement : ElementRef<HTMLElement>;

  // @Input() color: string = 'red'
  // @Input() mensaje: string = 'Este campo es requirido'
  private _color :string = 'red';
  private _mensaje : string = 'Este campo es requerido';

  @Input() set color(valor:string){
    this.setColor();
    
    this._color = valor;
    console.log(this._color);
    
  }
  @Input() set mensaje( valor:string ){
    
    this.setMensaje();
    this._mensaje = valor;
  }

  constructor( private el : ElementRef<HTMLElement>) {
    console.log('constructor directive');
    console.log(el);

    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if (changes.mensaje) {      
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerHTML = mensaje;
    // }

    // if (changes.color) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;      
    // }

  }

  ngOnInit(): void {
    console.log('OnInit directive');    
    this.setColor();
    this.setMensaje();
    this.setStilo()
  }

  setStilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
    // this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
