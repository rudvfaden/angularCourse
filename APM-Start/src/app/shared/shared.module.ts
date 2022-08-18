import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    startComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    startComponent
  ]
})
export class SharedModule { }
