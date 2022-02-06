//Uma loja deseja recompensar os seus empregados 
var readlineSync = require('readline-sync'); 
let numeroDeVendas = parseFloat(readlineSync.question('numero de vendas:')); 

if(numeroDeVendas > 29 && numeroDeVendas < 30){ 
    console.log('o bônus é de 250,00');
}else if(numeroDeVendas > 31 && numeroDeVendas < 80){ 
    console.log('o bônus é de 500,00');
}else if(numeroDeVendas > 80 && numeroDeVendas < 200){ 
    console.log('o bônus é de 1.000,00')
}else if(numeroDeVendas > 200 || numeroDeVendas < Infinity){ 
    console.log('o bônus é de 2.000,00');
}else{ 
    console.log('valor abaixo não haverá bônus');
}