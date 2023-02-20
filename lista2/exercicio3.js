/*Um brechó revende produtos usados  fixa o preço de venda de cada produto
conforme o valor de sua aquisição: se o preço de aquisição de um produto é menor
do de R$ 50.00, ele deve ser vendido por um preço 45% maior; caso contrário, o
lucro será de 30%. Sabendo disso, construa um algoritmo que leia o valor de
aquisição de um produto e mostre o seu valor de venda.*/
 var readlineSync = require('readline-sync'); 
 let produtosUsados = parseFloat(readlineSync.question('valor do produto:')); 
 
 if(produtosUsados < 50.00){  
     precoDaAquisicaoMenor = 45/100*produtosUsados;
     console.log('o preço da aquisição será maior(45%):',precoDaAquisicaoMenor);
 }else if(produtosUsados >= 50.00){  
    precoDaAquisicaoMaior = 30/100*produtosUsados;
    console.log('o preço da aquisição será maior(30%):',precoDaAquisicaoMaior);
}  

console.log('valor do produto comprado:',produtosUsados);