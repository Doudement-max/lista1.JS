//a temperatura 
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