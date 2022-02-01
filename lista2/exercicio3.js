//Um brechó revende produtos usados 
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