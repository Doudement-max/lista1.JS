//números romanos 
var readlineSync = require('readline-sync'); 
var escolhaUmNumeroRomano = parseFloat(readlineSync.question('numero romano de 1 a 10:')); 
 let numeroUm =1; 
 let numeroDois =2; 
 let numeroTres =3; 
 let numeroQuatro =4; 
 let numeroCinco =5; 
 let numeroSeis =6; 
 let numeroSete =7; 
 let numeroOito =8; 
 let numeroNove =9; 
let numeroDez =10; 
if(escolhaUmNumeroRomano === numeroUm){ 
    console.log('numero romano: I');
}else if(escolhaUmNumeroRomano === numeroDois){ 
    console.log('numero romano: II')
}else if(escolhaUmNumeroRomano === numeroTres){ 
    console.log('numero romano: III');
}else if(escolhaUmNumeroRomano === numeroQuatro){ 
    console.log('numero romano: IV');
}else if(escolhaUmNumeroRomano === numeroCinco){ 
    console.log('numero romano: V'); 
}else if(escolhaUmNumeroRomano === numeroSeis){ 
    console.log('numero romano: VI');
}else if(escolhaUmNumeroRomano === numeroSete){
    console.log('numero romano: VII');
}else if(escolhaUmNumeroRomano === numeroOito){ 
    console.log('numero romano: VIII'); 
}else if(escolhaUmNumeroRomano === numeroNove){ 
    console.log('numero romano: IX'); 
}else if(escolhaUmNumeroRomano === numeroDez){ 
    console.log('numero romano: X');
}else{ 
    console.log('numero não aceito, é de 1 a 10 a seleção de numeros.');
}