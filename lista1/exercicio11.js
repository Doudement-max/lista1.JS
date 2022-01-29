//Conversão de graus Celsius para Fahrenheit   
var readlineSync = require('readline-sync');

let celsius
celsius = parseFloat(readlineSync.question('Conversor em Celsius temperatura:')); 
let fahrenheitConversor = ( celsius*9/5)+32; 
 
let fahrenheit  
fahrenheit = parseFloat(readlineSync.question('Conversor em Fahrenheit temperatura:')); 
let celsiusConversor = (fahrenheit-32)*5/9;  
console.log('converção de Celsius para Fahrenheit:',fahrenheitConversor); 
console.log('converção de Fahrenheit para Celsius:',celsiusConversor);''