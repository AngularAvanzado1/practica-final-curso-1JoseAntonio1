import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from './store.actions';
import { Region } from './store.models';

export const storeFeatureKey = 'store';

export interface State {
  regiones:Region[]
}

export const initialState: State = {
  regiones: []
}

const storeReducer = createReducer(
  [],
  on(StoreActions.CrearRegiones, (state,regiones) => [...state,regiones])
);

export function reducer(state: any | undefined, action: Action) {
  return storeReducer(state, action);
}
