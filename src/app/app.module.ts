import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {env} from '../env';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { HomeComponent } from './Pages/home/home.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  
  providers: [{ provide: 'API_URL', useValue: env.backendUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
