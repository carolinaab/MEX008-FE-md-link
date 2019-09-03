#!/usr/bin/env node

// https://www.npmjs.com/package/md-link…
// const fs = require('fs');
// const marked = require('marked');

// const mdLinks = (ruta, opciones) => {
//   return new Promise((resolve, reect) => {
//     const compruebaExtencion = compruebaExtencion(ruta);
//     if (compruebaExtencion) {
//       const rutaAbsoluta = rutaAbsoluta(ruta);
//       extraeLinea(rutaAbsoluta)
//         .then((links) => {
//           if (opciones.validate) {
//             verificarlinks(links).then((data) => {
//               resolve(data)
//             });
//           } else {
//             resolve(links);
//           }

//         })
//         .cath((error) => {
//           console.log(error)
//         });
//     } else {
//       reject('ingrese un archivo valido');
//     }
//   });
// };
// // para convertir ruta absoluta 
// const rutaAbsoluta = (mostrarRuta) => {
// const resolve = path.resolve(mostrarRuta);

// return resolve;

// }

// // validar que sea archivo md
// const compruebaMd = (mostrarRuta) => {

// const permitido = '.md';
// const extencion = (mostrarRuta.substring(mostrarRuta.lastIndexOf('.').toLowerCase()));

// if (permitido == extencion) {
//   return true;
// } 
// if (permitido !== extencion) {
//   console.log(`solo puedes ingresar archivos ${permitido}`)
// }
// } 



// // fs.readFile('archivo.txt', 'utf8', (error,data) => {
// //   if(error) {
// //     throw error;
// //   } 
// //   else
// //     console.log(data)
// //   }
// // })




// const leerArchivo = (rutaArchivo) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
//       if (err) {
//         return reject(err)
//       } else {
//         return resolve(data)
//       }
//     });

//   });

// };







// module.exports = {
//   mdLinks,
//   rutaAbsoluta,
//   leerArchivo,
//   compruebaMd
// }