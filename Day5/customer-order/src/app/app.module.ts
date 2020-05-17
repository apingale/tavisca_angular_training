import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CutomerListComponent } from './app.cutomer.list.component';
import { OrderListComponent } from './app.order.list.component';
import { SearchComponent } from './app.search.component';
import { AppServiceService } from './app-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CutomerListComponent,
    OrderListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
