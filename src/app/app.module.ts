import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TyresComponent } from './tyres/tyres.component';
import { DemoMaterialModule } from './material-module';
import { HeaderComponent } from './header/header.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { FormsModule } from '@angular/forms';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TyresComponent,
    HeaderComponent,
    AppLoginComponent,
    AdminAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
