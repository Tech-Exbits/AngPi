import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// Import from ngx-spinner
import { NgxSpinnerModule } from "ngx-spinner";
// Import from @ngx-translate
import { TranslateModule} from '@ngx-translate/core';
// Import from ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
// Import from @ng-idle/keepalive
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { CoreModule } from './core/core.module';
import { DirectivesModule } from './directives/directives.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    CoreModule,
    DirectivesModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgIdleKeepaliveModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      closeButton: true
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    }),
    RouterModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
