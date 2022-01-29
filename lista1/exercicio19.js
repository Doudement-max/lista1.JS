//Preço dos ovos 
var readlineSync = require('readline-sync'); 
const numeroDeOvos = parseFloat(readlineSync.question('numero de ovos comprados:')); 
let duzia = Math.trunc(numeroDeOvos/12);
var ovoUnidade = numeroDeOvos-duzia; 
var duziaInteira = 10*duzia; 
var valorDaDuzia = duzia*3.25; 
let valorDaUnidade = ovoUnidade*0.45; 
let duziaUnidade = numeroDeOvos-duzia; 
console.log('O cliente comprou:',numeroDeOvos); 
console.log('A duzia vale:',duzia,'duzia e',ovoUnidade,'unidade'); 
console.log('O cliente deve pagar:', valorDaDuzia,'R$',duziaInteira,'duzia e:',valorDaUnidade,'R$ unidades de ovos.');