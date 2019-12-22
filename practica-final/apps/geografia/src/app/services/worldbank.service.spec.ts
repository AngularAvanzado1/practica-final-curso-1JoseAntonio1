import { TestBed, async } from '@angular/core/testing';

import { WorldbankService } from './worldbank.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GIVEN: WorldbankService es declarado en AppModule', () => {
  describe('WHEN: El AppModule es compilado', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports:[],
        declarations:[],
        providers: [WorldbankService,HttpClient,HttpHandler],
        schemas: []
      }).compileComponents();
    }));

    it('THEN: El Servicio deberia ser creado', () => {
      const service: WorldbankService = TestBed.get(WorldbankService);
      expect(service).toBeTruthy();
    });

    it('THEN: Deberia tener la variable Idioma con valor "en"', () => {
      const service: WorldbankService = TestBed.get(WorldbankService);
      expect(service.idioma).toEqual("en")
    })
  });
});
