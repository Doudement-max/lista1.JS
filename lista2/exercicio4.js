/*Escreva um algoritmo que leia três números e e mostre se
a soma de dois deles resulta no terceiro.*/
var readlineSync = require('readline-sync'); 
 let numeroUm = parseFloat(readlineSync.question('primeiro numero:')); 
 let numeroDois = parseFloat(readlineSync.question('segundo numero:')); 
 let numeroTres = parseFloat(readlineSync.question('terceiro numero:')); 
var calc = numeroUm+numeroDois; 
if(numeroTres === calc){ 
     console.log('resultado da soma do primeiro numero e do segundo numero é identico ao terceiro:',calc);
}else{
    console.log('a soma do numero 1 e 2 não é igual ao 3 numero.')
}
