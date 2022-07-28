import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeanComponent } from './jean/jean.component';



@NgModule({
  declarations: [JeanComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JeanComponent
  ]
})
export class ModuloTesteModule { }
