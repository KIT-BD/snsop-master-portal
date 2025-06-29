import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'auth/sign-in', component: SignInComponent },
    { path: 'private/dashboard', component: DashboardComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '', pathMatch: 'full', redirectTo: 'auth/sign-in' },
    {
        component: PageNotFoundComponent,
        path: '**',
    },
];
