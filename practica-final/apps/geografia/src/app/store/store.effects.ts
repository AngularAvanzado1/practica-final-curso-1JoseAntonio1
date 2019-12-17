import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as StoreActions from './store.actions';


@Injectable()
export class StoreEffects {


  loadStores$ = createEffect(() => this.actions$.pipe(

  ));


  constructor(private actions$: Actions) {}

}
