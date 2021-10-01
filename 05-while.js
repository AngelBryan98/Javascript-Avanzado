/* ---Cilo while---
    Nos permite repetir el codigo mientras una condicion sea verdadera
*/



/* Nan == No es un numero */

/* while (isNan(num1)) {
    num1 = parseInt(prompt("Ingresa un numero: "));
} */

/* ---Ciclo do while---
    Similar al ciclo while pero ejecuta la operacion orimero
*/

let num1 = parseInt(promt("Ingresa un número: "));

do {
    document.write (`<b>El numero introducido es: ${num1}</b>`);
    num1 = parseInt(prompt("Ingresa un numero: "));
}
while (num1 > 5):