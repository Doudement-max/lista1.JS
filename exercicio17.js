 //Conversão de unidades (milhas para polegadas, pés e jardas)
 var readlineSync = require('readline-sync'); 

var milha 
milha = parseFloat(readlineSync.question('conversor de milhas para jardas,pés e polegadas e sua distancia:')); 
var pes = milha*5280; 
var polegadas = milha*63360; 
var jardas = milha*1760. 
console.log('a distancia de milhas para jardas são:',jardas); 
console.log('a distancia de milhas para pés são:',pes); 
console.log('a distancia de milhas para polegadas são:',polegadas); 
