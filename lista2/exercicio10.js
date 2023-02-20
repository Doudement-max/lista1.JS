/*Uma loja de jogos vende cada jogo por R$ 150.00, mas concede descontos
conforme a quantidade comprada, 

Quantidade de jogos comprados Desconto
10–19 20%
20–49 30%
50 a 99 40%
100 ou mais 50% 

*/
var readlineSync = require('readline-sync'); 
var numeroDeJogosComprados = parseFloat(readlineSync.question('Quantidade de jogos comprados:')); 
 let valorDosJogos = numeroDeJogosComprados*150; 
if(numeroDeJogosComprados >= 10 && numeroDeJogosComprados < 19){  
    descontoDeVinte = 20/100*valorDosJogos;
    console.log('foi comprado',numeroDeJogosComprados,'teve 20% de desconto em jogos comprados, o valor pago será:',descontoDeVinte);
}else if(numeroDeJogosComprados >= 1 && numeroDeJogosComprados <= 9){ 
    console.log('sem desconto o valor pago:',valorDosJogos);
}else if(numeroDeJogosComprados >= 20 && numeroDeJogosComprados < 49){ 
    descontoDeTrinta = 30/100*valorDosJogos; 
    console.log('foi comprado',numeroDeJogosComprados,'teve 30% de desconto em jogos comprados, o valor pago será:',descontoDeTrinta);
}else if(numeroDeJogosComprados >= 50 && numeroDeJogosComprados < 99){ 
    descontoDeQuarenta = 40/100*valorDosJogos; 
    console.log('foi comprado',numeroDeJogosComprados,'teve 40% de desconto em jogos comprados, o valor pago será:',descontoDeQuarenta); 
}else if(numeroDeJogosComprados >= 100 || numeroDeJogosComprados < Infinity){ 
    descontoDeCinquenta = 50/100*valorDosJogos; 
    console.log('foi comprado',numeroDeJogosComprados,'teve 50% de desconto em jogos comprados, o valor pago será:',descontoDeCinquenta); 
}