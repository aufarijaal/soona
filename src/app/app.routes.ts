import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout.component';
import { DashboardIndexComponent } from './dashboard/dashboard-index.component';
import { SignInComponent } from './auth/signin.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardIndexComponent
      }
    ]
  },
  {
    path: 'auth/signin',
    component: SignInComponent
  }
];
