//Calorias dos Biscoitos 
var readlineSync = require('readline-sync'); 
 
let numeroDeBiscoitos;

numeroDeBiscoitos = parseFloat(readlineSync.question('Numero de Biscoitos:')); 
 let caloria = numeroDeBiscoitos*76; 

console.log('Biscoitos consumidos:', numeroDeBiscoitos,'Calorias:',caloria);