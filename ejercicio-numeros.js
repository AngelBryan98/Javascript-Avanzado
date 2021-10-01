const num1 = parseInt(prompt("Ingresa un numero: "));
const num2 = parseInt(prompt("Ingresa otro numero: "));

if (num1 > num2) {
    document.write(num1 + num2);
    document.write(num1-num2);
} else {
    document.write(num1*num2);
    document.write(num1/num2);
}
