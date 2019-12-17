import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { reducer } from './store/store.reducer';


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
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(
      {
        router: routerReducer,
        regiones: reducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [WorldbankService],
  bootstrap: [AppComponent]
})
export class AppModule {}
