import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfTestComponent } from './pdf-test/pdf-test.component';
import { PdfPuppeteerComponent } from './pdf-puppeteer/pdf-puppeteer.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfTestComponent,
    PdfPuppeteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
