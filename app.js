
const { crearArchivo } = require('./helpers/multiplicar.js');

console.clear();

console.log(process.argv);

const [, , arg3='base=5'] = process.argv;

const [, numero] = arg3.split('=');

console.log(numero);

//let numero = 4;

crearArchivo(numero)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

