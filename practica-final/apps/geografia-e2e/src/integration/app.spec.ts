import { tituloRegiones, visitHome } from '../support/app.po';

describe('GIVEN: La app web Geografia ', () => {
  beforeEach(() => visitHome());
  context('WHEN: El usuario visite la pagina "home"',() => {
    it('THEN: deberia salir ', () => {
      tituloRegiones().contains('Regiones del Mundo');
    });
  });
});
