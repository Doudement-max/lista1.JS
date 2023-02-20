/*o número de livros comprado e pontuados: • Se um cliente comprar 0 livros, ele ganhará 0 pontos.
• Se um cliente comprar um livro, ele ganhará 5 pontos.
• Se um cliente comprar dois livros, ele ganhará 15 pontos.
• Se um cliente comprar 3 livros, ele ganhará 30 pontos.
• Se um cliente comprar 4 ou mais livros, ele ganhará 60 pontos.
Crie um algoritmo que leia o número de livros comprado por um usuário e exiba
o número de pontos correspondentes.*/ 

var readlineSync = require('readline-sync'); 
let numeroDeLivros = parseFloat(readlineSync.question('numero de livros comprados:')); 
if(numeroDeLivros == 0){ 
    console.log('foram comprados:',numeroDeLivros,'serão ganhos 0 pontos');
}else if(numeroDeLivros == 1){
    console.log('foram comprados:',numeroDeLivros,'serão ganhos 5 pontos');
}else if(numeroDeLivros == 2){ 
    console.log('foram comprados:',numeroDeLivros,'serão ganhos 15 pontos'); 
}else if(numeroDeLivros == 3){ 
    console.log('foram comprados',numeroDeLivros,'serão ganhos 30 pontos'); 
}else if(numeroDeLivros == 4){ 
    console.log('foram comprados',numeroDeLivros,'serão ganhos 60 pontos');
}else if(numeroDeLivros == 5 && numeroDeLivros == 99999){ 
    console.log('foram comprados', numeroDeLivros,'todos os pontos foram zerados');

}

