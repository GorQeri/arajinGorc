import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoriComponentComponent } from './gori-component/gori-component.component';
import { XareBanerComponent } from './xare-baner/xare-baner.component';

@NgModule({
  declarations: [
    AppComponent,
    GoriComponentComponent,
    XareBanerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
