const nombre = prompt("¿Cual es tu nombre? ");
const añoNacimiento = prompt("¿Cual es tu año de nacimiento? ");
const añoActual = 2021;

const saludo = `Hola ${nombre} tienes ${añoActual-añoNacimiento} años.`;

document.write (saludo);