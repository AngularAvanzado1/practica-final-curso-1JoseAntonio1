import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { WorldbankService } from '../../services/worldbank.service';
import { Store, StateObservable } from '@ngrx/store';
import { StoreService } from '../../store/store.service';
import { Injectable } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';


describe('GIVEN: HomeComponent es declarado en AppModule', () => {
  describe('WHEN: El AppModule es compilado', () =>{
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports:[],
        declarations:[HomeComponent],
        providers: [WorldbankService],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      }).compileComponents();
    }));
    it('THEN: El componente deberia ser creado',() => {
      const fixture = TestBed.createComponent(HomeComponent);
      const Home = fixture.debugElement.componentInstance;
      expect(Home).toBeTruthy();
    })
  })
});
