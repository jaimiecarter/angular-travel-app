import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { BookingComponent } from './booking/booking.component';
import { OptionsComponent } from './options/options.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfig } from './api/api-config';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    OptionsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

