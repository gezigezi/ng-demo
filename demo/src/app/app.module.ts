import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './share/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './share/logger/logger.service';
@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [StockService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
