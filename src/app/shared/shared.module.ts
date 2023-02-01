import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components';
import { MaterialModule } from './material.module';

const MODULES = [
  MaterialModule,
  FormsModule,
  NgOptimizedImage,
  HeaderComponent,
];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
