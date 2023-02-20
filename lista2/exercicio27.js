/*jogo de adivinhação Esse número aleatório é inteiro e
não negativo, e deve ser escolhido dentro de uma faixa estabelecida pelo usuário
(por exemplo, o usuário pode estipular que esse número varie entre 0 e 10 ou entre
22 e 48, por exemplo). Após o usuário tentar adivinhar qual foi o número gerado,
o algoritmo deve escrever esse número e dizer se indicar se o palpite do jogador
estava correto, muito alto ou muito baixo.
Dica: Para gerar um número aleatório maior ou igual a zero e menor do que “x”,
utilize a função random(x).*/
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
