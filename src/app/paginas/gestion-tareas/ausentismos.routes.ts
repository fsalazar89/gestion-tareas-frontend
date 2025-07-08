import { Route } from '@angular/router';
import { MainBandejaTareasComponent } from './bandeja-tareas/main-bandeja-tareas/main-bandeja-tareas.component';
import { authGuard } from '../../guards/auth.guard';


export const routes: Route[] = [
    { path: '', redirectTo: 'bandeja-tareas', pathMatch: 'full' },
    { path: 'bandeja-tareas', component: MainBandejaTareasComponent, canActivate: [authGuard]},
]