import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Region } from './store.models';
import * as regionesAction from './store.actions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private store: Store<Region[]>) { }

  public CrearRegiones(regiones:Region[]):void{
    this.store.dispatch(regionesAction.CrearRegiones({
      regiones
    }))
  }
}
