const numero = parseInt(prompt('Introduce un numero',0));

for(let i = numero; i >= 0; i--){
    if(numero % i === 0){
        document.write(i);
    }
}

for(let i = 0; i <= numero; i++){
    if(numero % i === 0){
        document.write(i);
    }
}