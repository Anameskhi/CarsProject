import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/car-tables/car-tables.component').then(m => m.CarTablesComponent) },
];
