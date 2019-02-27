import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app-routing.module";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";
import { FilterUserComponent } from './filter-user/filter-user.component';
import {ProgressBarModule} from "angular-progress-bar"
import { CustomeCurrencyPipe } from './common/pipes/currencyPipe.pipe';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { EmailPipePipe } from './common/pipes/emailPipe.pipe';
import { HighlightDirective } from './common/directives/Highlight.directive';

@NgModule({
   declarations: [AppComponent,
      LoginComponent,
      ListUserComponent,
      AddUserComponent,
      EditUserComponent, 
      FilterUserComponent,
      CustomeCurrencyPipe ,
      EmailPipePipe,HighlightDirective],
   imports: [ BrowserModule,
       routing, 
       ReactiveFormsModule,
       HttpClientModule, 
       FormsModule, 
       ProgressBarModule],
   exports:    [ CustomeCurrencyPipe ],
   providers: [AuthenticationService, UserService,CustomeCurrencyPipe,CurrencyPipe, EmailPipePipe,UpperCasePipe],
   bootstrap: [AppComponent]
})
export class AppModule { }
