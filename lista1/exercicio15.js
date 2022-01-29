//Ajustador de Ingredientes
var readlineSync = require('readline-sync'); 
var cookies; 
cookies = parseFloat(readlineSync.question('quantos cookies:'));  
let xicaraDeAcucar = 0.03125*cookies; 
let xicaraDeManteiga = 0.0208333333333333*cookies; 
let xicaraFarinha = 0.057291666666667*cookies; 
  console.log('cookies pegos:',cookies); 
  console.log('quantidade de xicaras de açucar:',xicaraDeAcucar); 
  console.log('quantidade de xicara de manteira:',xicaraDeManteiga); 
  console.log('quantidade de xicaras de farinha:',xicaraFarinha);