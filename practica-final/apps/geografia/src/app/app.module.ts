import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Modulo para poder realizar peticiones
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegionComponent } from './components/region/region.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { CargandoComponent } from './components/shared/cargando/cargando.component';
import { PaisComponent } from './components/pais/pais.component';

//Rutas
import { ROUTES } from './app.routes';

//Servicios
import { WorldbankService } from './services/worldbank.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegionComponent,
    NavbarComponent,
    TarjetasComponent,
    CargandoComponent,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [WorldbankService],
  bootstrap: [AppComponent]
})
export class AppModule {}
