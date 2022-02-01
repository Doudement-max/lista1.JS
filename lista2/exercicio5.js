//o número de livros comprado e pontuados 
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

