import { Routes } from '@angular/router';
import { MainLoginComponent } from './paginas/login/main-login/main-login.component';
import { MainRegistroComponent } from './paginas/registro/main-registro/main-registro.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'login', component: MainLoginComponent, canActivate: []
    },
    {
      path: 'registro', component: MainRegistroComponent, canActivate: []
    },
    {
      path: 'tareas',
      loadChildren: () => import('./paginas/gestion-tareas/ausentismos.routes').then((m) => m.routes),
    },
];
