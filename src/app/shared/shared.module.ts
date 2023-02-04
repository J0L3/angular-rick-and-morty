import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components';
import { MaterialModule } from './material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const MODULES = [
  MaterialModule,
  FormsModule,
  ScrollingModule,
  NgOptimizedImage,
  HeaderComponent,
  InfiniteScrollModule,
];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
