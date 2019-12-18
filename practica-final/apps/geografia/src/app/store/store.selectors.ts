import { createFeatureSelector, createSelector } from '@ngrx/store';
import { regionesFeatureKey, State } from './store.reducer';
import { Region } from './store.models';

export const getRegionesMetodosState = createFeatureSelector<Region[]>(
  regionesFeatureKey
);

export const getPaisesMetodosState = createFeatureSelector<State>(
  regionesFeatureKey
);

export const getRegiones = createSelector(
  getRegionesMetodosState,
  (regiones: Region[]) => regiones
);

export const getPaises = createSelector(
  getPaisesMetodosState,
  (state: State) => state.paises
);
