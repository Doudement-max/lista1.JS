/*O peso em Newtons 
Peso = Massa × 9,8

Crie um algoritmo que leia a massa de um objeto e, em seguida, calcule seu peso.
Se o objeto pesar mais de 1.000 Newtons, exiba uma mensagem indicando que é
muito pesado. Se o objeto pesar menos de 10 Newtons, exiba uma mensagem
indicando que está muito leve.*/ 

var readlineSync = require('readline-sync');
 let massa = parseFloat(readlineSync.question('valor da massa de um objeto:'));
var calculoDoPeso = massa/9.8; 
if(massa >= 100 && massa <= 1000){
    console.log('esta massa é muito pesada',calculoDoPeso);
}else if(massa >= 1 && massa <= 90){ 
    console.log('essa massa é leve',calculoDoPeso)
}