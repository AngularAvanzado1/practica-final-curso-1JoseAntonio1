import { createFeatureSelector, createSelector } from '@ngrx/store';
import { regionesFeatureKey, State, paisesFeatureKey, regionFeatureKey, paisFeatureKey } from './store.reducer';

export const regionesMetodosState = createFeatureSelector<State>(
  regionesFeatureKey
);

export const paisesMetodosState = createFeatureSelector<State>(
  paisesFeatureKey
);

export const regionMetodosState = createFeatureSelector<State>(
  regionFeatureKey
);

export const paisMetodosState = createFeatureSelector<State>(
  paisFeatureKey
);


export const getRegiones = createSelector(
  regionesMetodosState,
  (state: State) => state.regiones
);

export const getPaises = createSelector(
  paisesMetodosState,
  (state: State) => state.paises
);

export const getRegion = createSelector(
  regionMetodosState,
  (state: State) => state.region
);

export const getPais = createSelector(
  paisMetodosState,
  (state: State) => state.pais
);
