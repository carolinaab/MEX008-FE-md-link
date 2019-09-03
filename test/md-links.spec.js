// const mdLinks = require('../');


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });


const readfile = require('../modulos/readfile.js');


describe('readfile', () => {

  it('debería ser una función', () => {
    expect(typeof readfile).toBe('function')
  });

});
