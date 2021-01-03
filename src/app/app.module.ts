import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
