/*quantidade de segundos fornecida com minutos,horas e dias  
• Se a quantidade de segundos for maior ou igual a 60, o programa deverá
exibir o número de minutos equivalente;
• Se a quantidade de segundos for maior ou igual a 3.600, o programa deverá
exibir o número de horas equivalente;
• Se a quantidade de segundos for maior ou igual a 86.400, será exibir o
número de dias equivalente.*/ 

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