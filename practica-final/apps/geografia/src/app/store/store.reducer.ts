import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from './store.actions';
import { Region, Pais } from './store.models';

export const regionesFeatureKey = 'regiones';
export const paisesFeatureKey = 'paises';
export const regionFeatureKey = 'region';
export const paisFeatureKey = 'pais';


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
  on(StoreActions.LeerRegiones, (state,regiones) => {
    return {
      ...state,
      regiones: regiones.regiones
    }
  }),
  on(StoreActions.LeerPaises, (state,paises) => {
    return {
      ...state,
      paises: paises.paises
    }
  }),
  on(StoreActions.LeerRegion, (state,region) => {
    return {
      ...state,
      region: region.region
    }
  }),
  on(StoreActions.LeerPais, (state,pais) => {
    return {
      ...state,
      pais: pais.pais
    }
  })
);

export function reducer(state: any | undefined, action: Action) {
  return storeReducer(state, action);
}
