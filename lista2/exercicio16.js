/*numero de uma apolice uma apólice de seguro,
incluindo o número da apólice, sobrenome do cliente, nome do cliente, idade, data
de vencimento do prêmio (mês, dia e ano) e número de acidentes de motorista nos
últimos três anos. Se um número da apólice inserido não estiver entre 1000 e 9999,
defina-a como sendo 0. Se o mês do vencimento não estiver entre 1 e 12 inclusive,
ou o dia não estiver correto para o mês (por exemplo, não entre 1 e 31 para Janeiro
ou 1 e 29 para fevereiro), defina o mês, dia e ano como 0.*/ 

var readlineSync = require ('readline-sync'); 
var nomeDoCliente = readlineSync.question('nome:'); 
var sobreNome = readlineSync.question('sobrenome:');  
var idadeDoCliente = readlineSync.question('idade:'); 
 let numeroDaApolice = parseFloat(readlineSync.question('número da apolice:')); 
 let diaDoVencimento = parseFloat(readlineSync.question('dia do vencimento do prêmio:')); 
 let mesDoVencimento = parseFloat(readlineSync.question('mes do vencimento do prêmio')); 
 let numeroDeAcidentes = parseFloat(readlineSync.question('numero de acidentes:')); 
  
if(numeroDaApolice >= 1000 && numeroDaApolice <= 9999){
    console.log('numero da apolice:',numeroDaApolice);
}else if(numeroDaApolice >= 0 && numeroDaApolice <= 999){ 
    console.log('numero da apoliice:',0);
} 
if(mesDoVencimento >= 1 && mesDoVencimento <= 12){ 
    console.log('mês valido:',mesDoVencimento);
}else{
    console.log('mês invalido'); 
}  
if(diaDoVencimento >= 1 && diaDoVencimento <= 31){ 
    console.log('dia valido:',diaDoVencimento);
}else{ 
    console.log('dia invalido');
} 
console.log('nome:',nomeDoCliente,'sobrenome',sobreNome); 
console.log('idade do cliente:',idadeDoCliente); 
console.log('numero de acidentes:',numeroDeAcidentes);