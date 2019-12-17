import { createAction, props } from '@ngrx/store';
import { Region } from './store.models';

export const CrearRegiones = createAction(
  '[REGIONES] Crear Regiones',
  props<{regiones:Region[]}>()
);
