//Jogo do Dolar  
 var readlineSync = require('readline-sync'); 
 let valorDoDolar = 1.45;  
 let valorDeCentavo1 = parseFloat(readlineSync.question('1°valor:')); 
 let valorDeCentavo5 = parseFloat(readlineSync.question('2°valor:')); 
 let valorDeCentavo10 = parseFloat(readlineSync.question('3°valor:')); 
 let valorDeCentavo25 = parseFloat(readlineSync.question('4°valor:')); 
 let valorDeCentavo50 = parseFloat(readlineSync.question('5°valor:'));  
 
var calculo = valorDeCentavo1+valorDeCentavo5+valorDeCentavo10+valorDeCentavo25+valorDeCentavo50;
if(calculo === valorDoDolar){
    console.log('Parabéns ganhou o jogo!',valorDoDolar,'de',calculo);
}else{
    console.log('Fim de jogo!',valorDoDolar,'de',calculo); 
}
