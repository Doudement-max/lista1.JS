//dois números inteiros  
var readlineSync = require('readline-sync'); 
let nrA = parseFloat(readlineSync.question('primeiro numero inteiro:')); 
let nrB = parseFloat(readlineSync.question('segundo numero inteiro:'));

if(nrA > nrB){ 
    const aux = nrA; 
  nrA = nrB; 
  nrB = aux;
} 
console.log('o valor de nrB é:',nrB,'\n o valor de nrA é:',nrA);