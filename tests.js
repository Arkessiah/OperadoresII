// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Operadores II', () => {
  it('Las variables nombre y apellido existen y valen Juan y Upgrader', () => {
    expect(nombre).to.equal('Juan');
    expect(apellido).to.equal('Upgrader');
  });

  it('La variable nombreCompleto es la suma de nombre y apellido separados por un espacio', () => {
    expect(nombreCompleto).to.equal('Juan Upgrader');
  });

  it('La variable edad vale 28 años', () => {
    expect(edad).to.equal(28);
  });

  it('La variable mensaje vale Mi nombre es Juan Upgrader y tengo 28 años', () => {
    expect(mensaje).to.equal('Mi nombre es Juan Upgrader y tengo 28 años');
  });
});
