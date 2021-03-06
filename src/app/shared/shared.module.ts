import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  imports: [
    
  ],
  exports: [
    ErrorMsgDirective
  ]
})
export class SharedModule { }
