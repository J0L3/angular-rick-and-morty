import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components';
import { MaterialModule } from './material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

const MODULES = [
  MaterialModule,
  FormsModule,
  ScrollingModule,
  NgOptimizedImage,
  HeaderComponent,
];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
