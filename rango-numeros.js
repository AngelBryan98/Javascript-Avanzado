const num1 = parseInt(prompt("Ingresa un numeros: "));
const num2 = parseInt(prompt("Ingresa otro numeros: "));

document.write(`Numeros impares entre ${num1} y ${num2} son:`)

if (num1 > num2) {
    mayor = num1,
        menor = num2
}
else {
    mayor = num2,
        menor = num1
}

for (i = menor; i < mayor; i++) {
    if (i % 2 != 0) {
        document.write(+i);
    }
}
