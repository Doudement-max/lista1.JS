/*data magica quando o dia multiplicado pelo mês resulta no ano. Esse é o caso de
datas como 9/02/18, 2/09/18, 13/04/52 ou 2/10/20, por exemplo. Sabendo disso,
crie um algoritmo que leia um dia (em formato numérico), mês e ano com dois
dígitos, informando se é uma “data mágica” ou não.*/ 

var readlineSync = require('readline-sync'); 
 let dia = parseFloat(readlineSync.question('dia:')); 
 let mes = parseFloat(readlineSync.question('mês:')); 
 let ano = parseFloat(readlineSync.question('ano:'));  
var calculoDoTempo = dia*mes; 
if(dia === 2 || dia === 4){ 
    console.log('dia:',dia); 
    console.log('mês',mes);
}else{
    console.log('escolha um numero entre 2,4 e 6 para multiplicar o mês');
}if(ano === calculoDoTempo){ 
    console.log('data magica!',calculoDoTempo);
}else{ 
    console.log('data errada');
}

