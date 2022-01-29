//Conversor de áreas de terra 
var readlineSync = require('readline-sync'); 

let area    
area = parseFloat (readlineSync.question('tamanho da area:')); 
let pesQuadrado = area*10.7639; 
var hectare = area*0.6830134553; 
let acre = area*0.000247105; 

console.log('\ntamanho da area:',area,'\nPés Quadrados:',pesQuadrado,'\nHectare:',hectare,'\nAcre:',acre);