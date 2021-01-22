import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {  SmlNgLineBreakPipe } from './../../projects/sml-ng-line-break/src/public-api'
@NgModule({
  declarations: [
    AppComponent,
    SmlNgLineBreakPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
