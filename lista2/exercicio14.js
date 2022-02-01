//data magica 
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

