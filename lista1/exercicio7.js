//Distancia percorrida por um automóvel 
var readlineSync = require('readline-sync'); 
var velocidade 
var tempo 
 
velocidade = parseFloat(readlineSync.question('velocidade percorrida medindo de 20 a 120:')); 
tempo = parseFloat(readlineSync.question('hora percorrida medindo de 0.5 a 1:')); 

var distancia = velocidade*tempo; 

console.log('A distancia que será percorrida é',distancia,'horas');
