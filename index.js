#!/usr/bin/env node

const analizar = require('./modulos/analizar');
const readFile = require('./modulos/readfile');



readFile('./README.md')
    .then(data => {
        const links = analizar(data);
        console.log(links);


    })

//analizar(data)





// readFile('./README.md').then(data => console.log(data))









