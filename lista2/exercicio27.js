//jogo de adivinhação 
var readlineSync = require('readline-sync'); 
const numeroAleatorio = parseFloat(readlineSync.question('escolha um número de 0 a 10:')); 
let gerador =Math.floor(Math.random() *1000);  

if(numeroAleatorio > 1 && numeroAleatorio <= 10){ 
    console.log('numero escolhido:',numeroAleatorio);
}else{ 
    console.log('numero não aceito');
}  
 if(gerador >= numeroAleatorio){ 
    console.log('numero está baixo');
}else if(gerador === numeroAleatorio){ 
    console.log('numero está correto');
}else if(gerador <= numeroAleatorio){ 
    console.log('numero está alto');
}
