import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpComponent } from './emp/emp.component';
import { WhetherComponent } from './whether/whether.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    WhetherComponent
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
