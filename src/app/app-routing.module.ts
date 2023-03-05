import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { AboutComponent } from './Pages/about/about.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { LandingComponent } from './Pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
