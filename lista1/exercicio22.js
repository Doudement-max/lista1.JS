//Percentual de votos  
var readlineSync = require('readline-sync'); 
 let numeroDeVotos = parseFloat(readlineSync.question('numero do 1 candidato:')); 
 let numeroDeVotos2 = parseFloat(readlineSync.question('numero do 2 candidato:')); 
 let numeroDeVotos3 = parseFloat(readlineSync.question('numero do 3 candidato:'));  
var nomeDoCandidato = readlineSync.question('nome do candidato 1:'); 
var nomeDoCandidato2 = readlineSync.question('nome do candidato 2:'); 
var nomeDoCandidato3 = readlineSync.question('nome do candidato 3:'); 
 
console.log('1° canditado:',nomeDoCandidato,'1° votos:',numeroDeVotos);   
console.log('2° canditado:',nomeDoCandidato2,'2° votos:',numeroDeVotos2);   
console.log('3° canditado:',nomeDoCandidato3,'2° votos:',numeroDeVotos3);   
