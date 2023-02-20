/*Uma loja deseja recompensar os seus empregados Crie um algoritmo que leia o
número de vendas de um empregado e calcule o seu bônus, conforme a seguir:


a. Se o número de vendas for menor que 30, o bônus é de R$ 250,00;
b. Se o número de vendas for maior que 31 e menor que 80, o bônus é de R$
500,00;
c. Se o número de vendas for maior que 80 e menor que 200, o bônus é de
R$ 1.000,00;
d. Se o número de vendas for 200 ou maior, o bônus é de R$ 2.000,00.*/
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