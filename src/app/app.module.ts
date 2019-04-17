import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';
import { CreateComponent } from './create/create.component';
import { OfficeService } from './office.service';
import { HttpClientModule } from '@angular/common/http';
 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    GetComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule ,ReactiveFormsModule  ],
  providers: [ OfficeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
