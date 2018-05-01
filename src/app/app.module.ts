import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrencyTableControllerComponent } from './controllers/currency-table-controller/currency-table-controller.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
