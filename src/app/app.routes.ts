import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard, redirectLogin } from './core/auth/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [redirectLogin]
  }
];
