//maquina de café
var readlineSync = require('readline-sync'); 
let tiposDeCafe = readlineSync.question('tipos de café: normal,expresso,capuccino,mocaccino:'); 
let valorInceridoNaMaquina = parseFloat(readlineSync.question('qual o valor inserido:'))

 if(tiposDeCafe === 'normal'){  
 let cafeNormal = 1.05; 
     tiposDeCafe = cafeNormal;
     console.log('café selecionado foi café comum que tem o valor de:',tiposDeCafe);
 }else if(tiposDeCafe === 'expresso'){ 
 let cafeExpresso = 1.52; 
    let tiposDeCafe = cafeExpresso;
     console.log('café selecionado foi café expresso que tem o valor de:',tiposDeCafe); 
 }else if(tiposDeCafe === 'capuccino'){ 
let capuccino = 2.17;   
     let tiposDeCafe = capuccino;
     console.log('café selecionado foi capuccino que tem o valor de:',tiposDeCafe); 
 }else if(tiposDeCafe === 'mocaccino'){ 
 let mocaccino = 2.36; 
     let tiposDeCafe = mocaccino;
     console.log('café selecionado foi mocaccino que tem o valor de:',tiposDeCafe);
 }else{ 
     console.log('erro',0);
 } 

if(valorInceridoNaMaquina >= 0.1 && valorInceridoNaMaquina <= 9999){ 
console.log('valor foi:',valorInceridoNaMaquina); 
} 
console.log('valor do troco:',tiposDeCafe/valorInceridoNaMaquina); 
