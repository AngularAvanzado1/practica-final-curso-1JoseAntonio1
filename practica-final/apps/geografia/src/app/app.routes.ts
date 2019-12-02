import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegionComponent } from './components/region/region.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'region/:code', component: RegionComponent},
  { path: '**', pathMatch: 'full', redirectTo:'home'},
  { path: '', pathMatch: 'full', redirectTo:'home'}  //Cualquier otra ruta nos redireccionara al home
];
