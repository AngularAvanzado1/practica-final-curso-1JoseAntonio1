import { tituloRegiones, visitHome, buscaforRegiones, tarjetasRegiones } from '../support/app.po';

describe('GIVEN: La app web Geografia ', () => {
  beforeEach(() => visitHome());
  context('WHEN: El usuario visite la pagina "home"',() => {
    it('THEN: deberia salir un titulo', () => {
      tituloRegiones().contains('Regiones del Mundo');
    });
    it('THEN: deberia salir una barra de buscador', () => {
      buscaforRegiones().on;
    });
    it('THEN: deberian salir tarjetas de regiones', () => {
      tarjetasRegiones().should('have.length', 48);
    });
  });
});
