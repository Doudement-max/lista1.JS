//Conversão de unidades (polegadas para pés) 
var readlineSync = require('readline-sync'); 
 
var distanciaEmPolegadas = parseFloat(readlineSync.question('distancia em polegadas para pé:'));  
const pes = Number(10); 
var calcpolegadas = 12;
 calcPesParaPolegadas = calcpolegadas*pes; 
const polegada = Number(100);
var calcpes = 0.833333; 
let calcPolegadasParaPes = calcpes*polegada;
console.log('o resultado da converção do pé pra polegada:',calcPesParaPolegadas); 
console.log('o resultado da converção de polegada para pé e:', calcPolegadasParaPes);

 