import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaisComponent } from './pais.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { RouterTestingModule } from '@angular/router/testing';
import { WorldbankService } from '../../services/worldbank.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Store, StoreModule, StateObservable } from '@ngrx/store';

  describe('GIVEN: PaisComponent es declarado en AppModule', () => {
    describe('WHEN: El AppModule es compilado', () =>{
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports:[RouterTestingModule,HttpClientModule,],
          declarations:[PaisComponent],
          providers: [WorldbankService,Store,StateObservable],
          schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        }).compileComponents();
      }));
      it('THEN: El componente deberia ser creado',() => {
        const fixture = TestBed.createComponent(PaisComponent);
        const Pais = fixture.debugElement.componentInstance;
        expect(Pais).toBeTruthy();
      })
    })
  });
