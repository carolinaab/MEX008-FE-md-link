const fs = require('fs');

const leerArchivo = (ruta) => {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf-8', (err, data) => {
            if (err) {
                return reject(err.message)
            } else {
                return resolve(data)
            }
        })
    })
};


module.exports = leerArchivo;

// leerArchivo('./README.md')
//     .then(data => console.log(data))
