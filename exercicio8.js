//Imposto sobre vendas 
var readlineSync = require('readline-sync'); 
let valorDeCompra 
valorDeCompra = parseFloat(readlineSync.question('valor da compra:')); 
var impostoEstadual = 4/100;
var impostoMunicipal = 2/100;
var impostoTotal = 8/100; 
let calculoEstadual = valorDeCompra*impostoEstadual; 
let calculoMunicipal = valorDeCompra*impostoMunicipal; 
let calculoTotal = impostoTotal*valorDeCompra;

console.log('\nvalor da compra:\n',valorDeCompra,'imposto Estadual sobre vendas:',calculoEstadual,'imposto Municipal sobre vendas',calculoMunicipal,'\nimposto total',calculoTotal); 
