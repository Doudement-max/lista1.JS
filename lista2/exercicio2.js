//Escreva um algoritmo que leia dois números fornecidos 
var readlineSync = require('readline-sync'); 
let usuarioNumero1 = parseFloat(readlineSync.question('Primeiro numero:')); 
let usuarioNumero2 = parseFloat(readlineSync.question('Segundo numero:')); 
  
if(usuarioNumero1 > usuarioNumero2){ 
    console.log('O primeiro número informado é o maior'); 
}else if(usuarioNumero2 > usuarioNumero1){ 
    console.log('O segundo número é o maior')
}else if(usuarioNumero1 === usuarioNumero2){ 
    console.log('Ambos os números são iguais');
} 
 
