import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng.module';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';


@NgModule({
  declarations: [],
  imports: [
    DiagramModule,
    PrimeNgModule
  ],
  exports: [PrimeNgModule,DiagramModule]
})
export class SharedModule { }
