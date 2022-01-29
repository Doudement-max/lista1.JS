//Gorjeta, Imposto e Total Pago por uma Refeição 
var readlineSync = require('readline-sync'); 

var valorDaRefeicao 
valorDaRefeicao = parseFloat(readlineSync.question('Valor da Refeição:'));  
let valorDaGorjeta = 15/100*valorDaRefeicao; 
let valorDoImposto = 7/100*valorDaRefeicao; 
let valorTotal = valorDaGorjeta+valorDoImposto+valorDaRefeicao; 
console.log('\nValor Da Refeição:',valorDaRefeicao,'\nValor Da Gorjeta:',valorDaGorjeta);
console.log('Valor Do Imposto:',valorDoImposto,'\nValor Total:',valorTotal);