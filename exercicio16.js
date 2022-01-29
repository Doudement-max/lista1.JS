//Quantidade de tinta  
var readlineSync = require('readline-sync'); 
let numeroDeGalao  
numeroDeGalao = parseFloat (readlineSync.questionInt('Qual o numero de quartos de um galão necessários?:')); 
var quarto =1/4*numeroDeGalao; 
console.log('o trabalho requer:',numeroDeGalao,'galão'); 
console.log('o que equivale a quatro galões:',quarto); 
