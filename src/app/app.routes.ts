import { Routes } from '@angular/router';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { Private } from './pages/private/private';
import { Profile } from './pages/private/profile/profile';
import { SignIn } from './pages/auth/sign-in/sign-in';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Unauthorized } from './components/unauthorized/unauthorized';
import { authGuard } from './auth-guard';
import { routeGuard } from './route-guard';

export const routes: Routes = [
    { path: 'auth/sign-in', canActivate: [authGuard], component: SignIn },
    {
        path: 'private', component: Private, canActivate: [routeGuard], children: [
            { path: 'private', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'profile', component: Profile },
        ]
    },

    { path: 'unauthorized', component: Unauthorized },
    { path: '', pathMatch: 'full', redirectTo: 'auth/sign-in' },
    {
        component: PageNotFound,
        path: '**',
    },
];
