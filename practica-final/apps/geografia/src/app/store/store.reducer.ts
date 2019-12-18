import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from './store.actions';
import { Region, Pais } from './store.models';

export const regionesFeatureKey = 'regiones';
export const paisesFeatureKey = 'paises';

export interface State {
  regiones:Region[],
  paises:Pais[],
  region:Region,
  pais:Pais
}

export const initialState: State = {
  regiones: [],
  paises:[],
  region:null,
  pais:null
}

const storeReducer = createReducer(
  [],
  on(StoreActions.LeerRegiones, (state,regiones) => [...state,regiones]),
  on(StoreActions.LeerPaises, (state,paises) => [...state,paises])
);

export function reducer(state: any | undefined, action: Action) {
  return storeReducer(state, action);
}
