//Consumo de um automóvel 
var readlineSync = require('readline-sync'); 
let milhas  
let galao 
milhas = parseFloat (readlineSync.question('quantas milhas:')); 
galao = parseFloat (readlineSync.question('galões utilizados:')); 
var mpg = milhas/galao; 
var quilometro = 1.60934; 
var litrosDoGalao = 0.264172; 
let calcquilometro = milhas*quilometro; 
var calcgalao = galao*litrosDoGalao; 
console.log('\nmilhas percorridas:',milhas,'\ngalões usados:',galao,'\n consumo',mpg); 
console.log('\nKM percorrido:',calcquilometro,'\nlitros consumidos:',calcgalao);
