import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Region, Pais } from './store.models';
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
      regiones: {...regiones}
    }))
  }

  public LeerPaises(paises:Pais[]):void{
    this.store.dispatch(storeAction.LeerPaises({
      paises: {...paises}
    }))
  }

  //SELECTORES
  public getRegiones$():Observable<Region[]>{
    return this.store.select(storeSelector.getRegiones);
  }

  public getPaises$():Observable<Pais[]>{
    return this.store.select(storeSelector.getPaises);
  }
}
