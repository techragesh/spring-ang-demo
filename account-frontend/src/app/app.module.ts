import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AuthenticationService } from './services/authentication.service';
import { AccountService } from './services/account.service';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListAccountComponent,
    AddAccountComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [AccountService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
