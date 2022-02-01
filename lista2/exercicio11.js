//quantidade de segundos fornecida com minutos,horas e dias 
var readlineSync = require('readline-sync');
 let quantidadeDeSegundosFornecido = parseFloat(readlineSync.question('segundos fornecidos:'));  
if(quantidadeDeSegundosFornecido <= 60){ 
  minutosEquivalentes = 60*quantidadeDeSegundosFornecido; 
console.log('o número equivalente de minutos é',quantidadeDeSegundosFornecido,'de',minutosEquivalentes,'quantidade de segundos'); 

} 
 if(quantidadeDeSegundosFornecido <= 3600){ 
 horasEquivalentes = 3600*quantidadeDeSegundosFornecido; 
 console.log('o número equivalente de horas é:',quantidadeDeSegundosFornecido,'de',horasEquivalentes,'quantodade de segundos:');
} 
if(quantidadeDeSegundosFornecido <= 86400){ 
    diasEquivalentes = 86400*quantidadeDeSegundosFornecido; 
console.log('o número equivalente de dias é',quantidadeDeSegundosFornecido,'de',diasEquivalentes,'quantidade de segundos');

}