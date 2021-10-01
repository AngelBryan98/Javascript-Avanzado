let numero = parseInt(prompt("Ingresa un numero: "));
let suma = 0;
let contador = 0;

while (numero >= 0) {
    contador ++;
    suma = suma + numero;
    numero = parseInt(prompt("Ingresa un numero: "));

}

document.write(`La suma del numero es: ${suma} y su media: ${numero / contador}`);