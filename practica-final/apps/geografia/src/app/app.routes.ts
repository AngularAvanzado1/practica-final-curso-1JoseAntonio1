import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'buscar', component: BuscarComponent},
  { path: '', pathMatch: 'full', redirectTo:'home'}  //Cualquier otra ruta nos redireccionara al home
];
