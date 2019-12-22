import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('GIVEN: AppComponent es declarado en AppMudule', () => {
  describe('WHEN: El modulo App es compilado', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      }).compileComponents();
    }));

    it('THEN: Deberia crearse la App', () => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app).toBeTruthy();
    });

    it(`THEN: Deberia tener el titulo 'geografia'`, () => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app.title).toEqual('geografia');
    });
  });
});
