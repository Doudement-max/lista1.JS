//O peso em Newtons 
var readlineSync = require('readline-sync');
 let massa = parseFloat(readlineSync.question('valor da massa de um objeto:'));
var calculoDoPeso = massa/9.8; 
if(massa >= 100 && massa <= 1000){
    console.log('esta massa é muito pesada',calculoDoPeso);
}else if(massa >= 1 && massa <= 90){ 
    console.log('essa massa é leve',calculoDoPeso)
}