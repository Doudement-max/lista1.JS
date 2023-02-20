/*a temperatura: imprima o
resultado de acordo com a tabela abaixo.

Temperatura Resultado

até 15o Muito frio
de 16o a 23o Frio
de 23o a 26o Agradável
de 26o a 30o Quente
acima de 31o Muito quente*/ 

var readlineSync = require('readline-sync'); 
var temperatura = parseFloat(readlineSync.question('qual a temperatura:')); 
if(temperatura >= 1 && temperatura <= 15 ){ 
    console.log('muito frio:',temperatura,'°');
}else if(temperatura >= 16 && temperatura < 23){
    console.log('frio',temperatura,'°'); 
}else if(temperatura >= 23 && temperatura < 26){ 
    console.log('agradável',temperatura,'°');
}else if(temperatura >= 26 && temperatura <= 30){ 
    console.log('quente',temperatura,'°');
}else if(temperatura >= 31 && temperatura <= Infinity){
    console.log('muito quente',temperatura,'°');
}