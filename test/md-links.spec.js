// const mdLinks = require('../');


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });


const readFile = require('../lib/readfile');






describe('readFile', () => {
  it('debería ser una función', () => {
    expect(typeof readFile).toBe('function');
  });
  it('debería retornar un texto', () => {
    return readFile('./pruebas.md').then(value => {
      expect(typeof value).toBe('string');
    });
  });

})