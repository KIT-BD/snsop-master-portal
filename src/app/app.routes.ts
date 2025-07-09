import { Routes } from '@angular/router';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { Private } from './pages/private/private';
import { Profile } from './pages/private/profile/profile';
import { SignIn } from './pages/auth/sign-in/sign-in';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Unauthorized } from './components/unauthorized/unauthorized';
import { authGuard } from './auth-guard';
import { routeGuard } from './route-guard';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { BeneficiaryList } from './pages/private/beneficiary/beneficiary-list/beneficiary-list';
import { BeneficiaryManage } from './pages/private/beneficiary/beneficiary-manage/beneficiary-manage';
import { BeneficiaryRegistration } from './pages/private/beneficiary/beneficiary-registration/beneficiary-registration';
import { ComingSoon } from './components/coming-soon/coming-soon';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [authGuard],
    children: [
      {
        path: 'sign-in',
        component: SignIn,
      },
      { path: 'forgot-password', component: ForgotPassword },
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    ],
  },
  {
    path: 'private',
    component: Private,
    canActivate: [routeGuard],
    children: [
      { path: 'private', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ComingSoon },
      { path: 'profile', component: Profile },
      {
        path: 'beneficiary',
        children: [
          { path: 'list', component: ComingSoon },
          { path: 'registration', component: ComingSoon },
          { path: 'edit/:bid', component: BeneficiaryManage },
          { path: '', pathMatch: 'full', redirectTo: 'list' },
        ],
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },

  { path: 'unauthorized', component: Unauthorized },
  { path: '', pathMatch: 'full', redirectTo: 'auth/sign-in' },
  {
    component: PageNotFound,
    path: '**',
  },
];
