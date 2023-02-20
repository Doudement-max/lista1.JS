/*Faça um algoritmo que leia dois números inteiros e os armazene em duas variáveis
inteiras, digamos, nrA e nrB. Após compará-las, o algoritmo tem que garantir que
o menor valor fique armazenado em nrA e o maior em nrB.*/
var readlineSync = require('readline-sync'); 
let nrA = parseFloat(readlineSync.question('primeiro numero inteiro:')); 
let nrB = parseFloat(readlineSync.question('segundo numero inteiro:'));

if(nrA > nrB){ 
    const aux = nrA; 
  nrA = nrB; 
  nrB = aux;
} 
console.log('o valor de nrB é:',nrB,'\n o valor de nrA é:',nrA);