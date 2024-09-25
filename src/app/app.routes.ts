import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    // {
    //     path: 'create',
    //     loadComponent: () => import('./components/tvshow-form/tvshow-form.component').then(m => m.TvShowFormComponent)
    // },
    // {
    //     path: 'edit/:id',
    //     loadComponent: () => import('./components/tvshow-form/tvshow-form.component').then(m => m.TvShowFormComponent)
    // },
    {
        path: '**',
        redirectTo: ''
    }
];
