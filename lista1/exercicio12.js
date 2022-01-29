//Negociação de Ações 
var readlineSync = require('readline-sync'); 
//a  
  var acoesPagas 
acoesPagas = parseFloat (readlineSync.question('ações compradas:')); 
  let valorPago = acoesPagas*32.87;  
  //modificação 
  var valorPercentual = valorPago%100;
//b
  var taxaCorretagem = 2/100*valorPago; 
  //modificação 
  var valorDeMomento = valorPago/taxaCorretagem; 
//c 
  var vendasDasAcoes = acoesPagas*33.92;  
  //modificação 
  var valorPercentualVendas = vendasDasAcoes%100;
//d 
let taxaCorretagemVendas = 2/100*vendasDasAcoes; 

console.log('ações compradas por José:',valorPago,'\ntaxa de corretagem:',taxaCorretagem,'valor de cada ação no momento da compra:',valorDeMomento); 
console.log('Quantidade que José vendeu:',vendasDasAcoes,'\ntaxa de corretagem das vendas:',taxaCorretagemVendas); 
console.log('valor percentual de compra:',valorPercentual,'%','\nvalor percentual das vendas das ações:',valorPercentualVendas);