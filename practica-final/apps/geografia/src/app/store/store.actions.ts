import { createAction, props } from '@ngrx/store';
import { Region, Pais } from './store.models';

export const LeerRegiones = createAction(
  '[REGIONES] Leer Regiones',
  props<{regiones:Region[]}>()
);

export const LeerPaises = createAction(
  '[PAISES] Leer Paises',
  props<{paises:Pais[]}>()
);

export const LeerRegion = createAction(
  '[REGION] Leer Region',
  props<{region:Region}>()
);

export const LeerPais = createAction(
  '[PAIS] Leer Pais',
  props<{pais:Pais}>()
);
