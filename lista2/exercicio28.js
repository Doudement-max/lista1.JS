//jogo de loteria 
var readlineSync = require('readline-sync');  
 let numero1 = parseFloat(readlineSync.question('numero 1°:'));
 let numero2 = parseFloat(readlineSync.question('numero 2°:'));
 let numero3 = parseFloat(readlineSync.question('numero 3°:'));
  const resultado = Math.floor(Math.random() *9); 
 
 if(numero1 <= resultado){ 
     console.log('ganhou 10 pts!');
 }else if(numero1 >= resultado && numero2 >= resultado && numero3 >= resultado){ 
     console.log('acertou 3 ganhou 1000 pts!');
 }else if(numero1 >= resultado && numero2 >= resultado){ 
     console.log('acertou 2 ganhou 100 pts!');
 }else if(numero1 > resultado && numero2 > resultado && numero3 > resultado){ 
     console.log('acertou 3 na mesma ordem! 1.000.000');
 }