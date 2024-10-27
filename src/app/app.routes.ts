import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RegisterComponent} from './register/register.component';



export const routes: Routes = [
  {path:'login',component: LoginFormComponent},
  {path:'home',component: HomePageComponent},
  {path:'register',component: RegisterComponent},
];
