//funções matematicas 
var readlineSync = require('readline-sync') 
var operadorMatematico = parseFloat(readlineSync.question('exiba um numero entre 1 e 4:1 elevar ao quadrado,2 raiz quadrada,3 seno,4 exponencial:')); 
let numeroEscolhido = parseFloat(readlineSync.question('escolha um numero:'));   
if(operadorMatematico === 1){ 
    elevadoAoQuadrado = Number(Math.pow(numeroEscolhido, 2));
    console.log('1° Elevado ao Quadrado:',elevadoAoQuadrado);
}else if(operadorMatematico === 2){  
    raizQuadrada =Number (Math.sqrt(numeroEscolhido));
    console.log('2° Raiz Quadrada:',raizQuadrada);
}else if(operadorMatematico === 3){ 
    seno =Number (Math.sin(numeroEscolhido)); 
    console.log('3° Seno:',seno);
}else if(operadorMatematico === 4){ 
    exponencial =Number (Math.exp(numeroEscolhido)); 
    console.log('4° Exponencial:',exponencial);
}else{
    console.log('escolha um numero entre 1 e 4');
}