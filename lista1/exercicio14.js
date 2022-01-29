//Porcentagens de homens e mulheres numa sala de aula 
var readlineSync = require('readline-sync'); 

let numeroDeHomens; 
let numeroDeMulheres; 
numeroDeHomens = parseFloat(readlineSync.question('número de homens:')); 
numeroDeMulheres = parseFloat(readlineSync.question('número de mulheres:')); 
let totalDaClasse = numeroDeHomens+numeroDeMulheres; 
var porcentagemHomem = numeroDeHomens/totalDaClasse; 
var porcentagemMulheres = numeroDeMulheres/totalDaClasse; 
console.log('numero de homens na classe:\n',numeroDeHomens); 
console.log('numero de mulheres na classe:\n',numeroDeMulheres) 
console.log('total de pessoas na classe:\n',totalDaClasse); 
console.log('porcentagem de homens:\n',porcentagemHomem); 
console.log('porcentagem de mulheres:\n',porcentagemMulheres); 
