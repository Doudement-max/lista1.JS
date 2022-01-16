//Informações Pessoais 
var readlineSync = require('readline-sync'); 
var nome 
var endereco 
var cidade 
var estado 
var cep 
var numeroDeTelefone 
var atuacaoProfissional 

nome = readlineSync.question('Seu Nome:'); 
endereco = readlineSync.question('endereço:'); 
cidade = readlineSync.question('cidade:'); 
estado = readlineSync.question('estado:'); 
cep = Number(parseFloat(readlineSync.question('CEP:'))); 
numeroDeTelefone = Number (readlineSync.question('Numero de Telefone:')); 
atuacaoProfissional = readlineSync.question('Área de atuação profissional'); 

console.log('\nNome:',nome,'\nendereço:',endereco,'\ncidade:',cidade,'\nestado:',estado,'\nCEP:',cep,'\nnumero de telefone:',numeroDeTelefone,'\nArea de atuação profissional',atuacaoProfissional);