//Conversão de unidades (minutos para horas e dias) 
var readlineSync = require('readline-sync'); 
 
let minutos = parseFloat(readlineSync.question('conversão de minutos para horas e dias, fale os minutos:')); 
let conversaoDeHoras = minutos/60; 
let conversaoDeDias = minutos/1440; 
console.log('são exatamente',minutos,'minutos'); 
console.log('a conversão desses minutos para horas são:',conversaoDeHoras);
console.log('conversão desses minutos para dias são:',conversaoDeDias); 