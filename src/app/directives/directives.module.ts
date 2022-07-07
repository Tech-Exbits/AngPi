import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessGrantedDirective } from './access-granted.directive';
import { AccessDeniedDirective } from './access-denied.directive';
import { BetaAccessDirective } from './beta-access.directive';
import { TemplateSwitchDirective } from './template-switch.directive';
import { MobileDirective } from './mobile.directive';
import { PcDirective } from './pc.directive';
import { AndriodDirective } from './andriod.directive';
import { IosDirective } from './ios.directive';

@NgModule({
  declarations: [
    AccessGrantedDirective,
    AccessDeniedDirective,
    BetaAccessDirective,
    TemplateSwitchDirective,
    MobileDirective,
    PcDirective,
    AndriodDirective,
    IosDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccessGrantedDirective,
    AccessDeniedDirective,
    BetaAccessDirective,
    TemplateSwitchDirective,
    MobileDirective,
    PcDirective,
    AndriodDirective,
    IosDirective
  ]
})
export class DirectivesModule { }
