const expect = require('chai').expect;
const modulonpm = require('..').default;

describe("#modulonpm", function() {
  it('si la palabra termina con "ar", se le quitan esas dos letras', function() {
    const translation = modulonpm("Programar");
    expect(translation).to.equal("Program");
  });
  it('si la palabra inicia con Z, se le añade "pe" al final', function() {
    const translation = modulonpm("Zorro")
    const translation2 = modulonpm("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  });
  it("si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio", function() {
    const translation = modulonpm("abecedario")
    expect(translation).to.equal("abece-dario")
  });
  it("si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas", function() {
    const translation = modulonpm("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  });
});
