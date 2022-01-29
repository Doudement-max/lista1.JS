//Jantar Beneficente  
var readlineSync = require('readline-sync');  
console.table('preço  dos tickets para adultos: 20 R$ e para crianças: 12R$');
let numeroDoTicketAdulto = parseFloat(readlineSync.question('numero do ticket para adulto:')); 
let numeroDoTicketCrianca = parseFloat(readlineSync.question('numero do ticket para criança:')); 
 var adulto = 20.00*numeroDoTicketAdulto; 
 var crianca = 12.00*numeroDoTicketCrianca; 
 var total = adulto+crianca; 
let lucroAdulto =Math.trunc (adulto/7.10); 
let lucroCrianca =Math.trunc (crianca/5.35); 
let totalDeLucro =Math.trunc(lucroAdulto*lucroCrianca);
 console.log('numero de tickets para adultos:',numeroDoTicketAdulto,'numero de tickets para crinça:',numeroDoTicketCrianca);
 console.log('os clientes devem pagar:',adulto,crianca,'totalizando:',total); 
 console.log('lucros:','adulto',lucroAdulto,'crianca',lucroCrianca); 
console.log('lucro total:',totalDeLucro);