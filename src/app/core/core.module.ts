import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    DirectivesModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
  ]
})
export class CoreModule { }
