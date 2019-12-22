import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Region, Pais } from '@practica-final/domain';
import * as storeAction from './store.actions';
import * as storeSelector from './store.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private store: Store<Region[]>) { }

  //ACCIONES
  public LeerRegiones(regiones:Region[]):void{
    this.store.dispatch(storeAction.LeerRegiones({
      regiones: [...regiones]
    }))
  }

  public LeerPaises(paises:Pais[]):void{
    this.store.dispatch(storeAction.LeerPaises({
      paises: [...paises]
    }))
  }

  public LeerRegion(region:Region):void{
    this.store.dispatch(storeAction.LeerRegion({
      region: {...region}
    }))
  }

  public LeerPais(pais:Pais):void{
    this.store.dispatch(storeAction.LeerPais({
      pais: {...pais}
    }))
  }

  //SELECTORES
  public getRegiones$():Observable<Region[]>{
    return this.store.select(storeSelector.getRegiones);
  }

  public getPaises$():Observable<Pais[]>{
    return this.store.select(storeSelector.getPaises);
  }

  public getRegion$():Observable<Region>{
    return this.store.select(storeSelector.getRegion);
  }

  public getPais$():Observable<Pais>{
    return this.store.select(storeSelector.getPais);
  }
}
