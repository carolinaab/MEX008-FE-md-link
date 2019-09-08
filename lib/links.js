#!/usr/bin/env node


const path = require('path');
const fetch = require('node-fetch');
const extraerLinks = require('./extraerlinks');
const readFile = require('./readfile');
const colors = require('colors');
const rutaPrueba = './pruebas.md'





readFile(rutaPrueba)
    .then(data => {
        const links = extraerLinks(data);
        // console.log(links);
        links.forEach(element => {
            fetch(element)
                .then(res => {

                    const statusLink = res.status;
                    if (statusLink == 200) {
                        console.log(`${element.text}`.green + " " + 'Ok'.yellow.bold)
                    }
                    else if (statusLink == 404) {
                        console.log(`${element.text}`.cyan + " " + 'Fail'.red.bold)
                    }
                })
        });
    }

    )


//     const fs = require('fs');
// const path = require('path');
// const marked = require('marked');

// let validate = false;
// let stats = false;
// let mdLinks = {};

// mdLinks.mdLinks = (ruta, opciones) => {
//     return new Promise((resolve, reject) => {
//         if (!ruta)
//             return reject('se requiere archivo markdown');
//         if (opciones.validate) validate = true;
//         let rutaAbsoluta = mdLinks.path.resolve(ruta)
//         let validarArchivo = mdLinks.vali

//     })
// }


// const rutasMd = () => {
//     return new Promise((resolve, reject) => {
//         fs.readdir(rutaAbsoluta, (err, data) => {
//             if (err) {
//                 if (err) {
//                     return reject(err.message)
//                 }
//             } else {
//                 return resolve(data.forEach(element => {
//                     if (path.extname(element) === '.md') {
//                         readFile(element, 'utf-8', (err, data) => {
//                             const links = analizar(data)
//                             if (err) {
//                                 console.error(err.message)
//                             } else if (comandoDeOpciones == '--stasts' && comadoDeOpcionesOtro == '--validate') {
//                                 console.log(links);
//                             }
//                         })
//                     }

//                 }))
//             }
//         })

//     })


// }

// module.exports = rutasMd;