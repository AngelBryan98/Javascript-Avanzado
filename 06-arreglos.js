const arreglo = [];

let lenguajes = ["Javascript", "Java", "PHP", "Python"]

/*for each */

lenguajes.forEach(function(lenguaje, index) {
    document.write(`<p>${lenguaje} - ${lenguajes}</p>`);
});
document.write(`</ul>`;)

/* Map, crea un nuevo arreglo con los resultados */

let numeros = array(2, 3, 4, 27, 19, 12)
let numeros2 = numeros.map(function(numeroTemp) {
    return numeroTemp * 2;
});

console.log(numeros);
console.log(numeros2);

/* Includes determina si un arreglo tiene un valor */
console.log(lenguajes.includes("PHP"));
/* se agrega ! para preguntar si no tiene el valor */
console.log(!lenguajes.includes("PHP"));

/* filter sirve para excluir valores especificos */

let filtrados = numeros.filter(function(numero) {
    if (numero > 10) {
        return numero;
    }
});

console.log(filtrados);