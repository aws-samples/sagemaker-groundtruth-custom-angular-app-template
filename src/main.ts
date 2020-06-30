import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule, Injector} from '@angular/core';
import { createCustomElement } from "@angular/elements";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {Home} from './app/home';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [Home],
  declarations: [Home],
  bootstrap: [],
  providers: []
})
export class AppModule {
  constructor(private injector:Injector){

  }

  ngDoBootstrap() {
    const el = createCustomElement(Home, { injector: this.injector });
    customElements.define('ng-home', el);
   }
}

platformBrowserDynamic().bootstrapModule(AppModule);
