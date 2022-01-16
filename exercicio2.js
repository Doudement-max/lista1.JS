//Tipos de dados 
var readlineSync = require('readline-sync'); 
var numeroDeIrmao 
var conceitoDaAula 
var quantidadeDoAno 
var idadeDaPessoa 

numeroDeIrmao = readlineSync.question('Quantos irmão você tem?'); 
conceitoDaAula = readlineSync.question('conceito sobre a aula de hoje:'); 
quantidadeDoAno = readlineSync.question('Qual a minutagem do ano?'); 
idadeDaPessoa = readlineSync.question('Qual idade da pessoa?'); 

console.log('Quantidade de irmãos:', numeroDeIrmao,'\nO seu conceito nesta aula',conceitoDaAula,'\nA minutagem do ano:',quantidadeDoAno,'\nA idade da pessoa:',idadeDaPessoa);