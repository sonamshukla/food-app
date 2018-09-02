import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatGridListModule,
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';
@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule
 ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule
  ],
  declarations: [
  ],
})
export class MaterialModule { }
