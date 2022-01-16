//Previsão de vendas 
var readlineSync = require('readline-sync'); 
 
var valorDoProduto 
var lucro = 23/100;  
valorDoProduto = readlineSync.question('Valor do produto:'); 
var resultadoFinal = valorDoProduto*lucro;

console.log('valor da compra:',valorDoProduto,'lucro',lucro,'valor obtido:',resultadoFinal);