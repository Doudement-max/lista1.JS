//Um certo petshop 
var readlineSync = require('readline-sync'); 
 let registroDoProprietario =Number (readlineSync.question('RG do proprietario:')); 
 let nomeERaca = readlineSync.question('Nome e Raça do cão:'); 
 let idadeDoCao =Number (readlineSync.question('idade do cão:')); 
 let pesoDoCao = parseFloat(readlineSync.question('peso do cão:\n'));  
 let taxaSemanal8Kg = 50.00; 
 let taxaSemanal15Kg = 70.00; 
 let taxaSemanal40Kg = 100.00; 
 let taxaSemanal155Kg = 125.00  

if(pesoDoCao >= 8 && pesoDoCao <= 9){  
    taxaorcamento8 = taxaSemanal8Kg*7; 
    console.log('\no cão pesa:',pesoDoCao,'Kg logo a taxa semanal será de:',taxaSemanal8Kg,'Reais semanais');  
    console.log('custo para hospedar o animal por uma semana:',taxaorcamento8);
}else if(pesoDoCao >= 9 && pesoDoCao <= 15){  
    taxaorcamento15 = taxaSemanal15Kg*7; 
    console.log('o cão pesa:',pesoDoCao,'Kg logo a taxa semanal será de:',taxaSemanal15Kg,'Reais semanais'); 
    console.log('custo para hospedar o animal por uma semana:',taxaorcamento15);
}else if(pesoDoCao >= 15 && pesoDoCao <= 40){  
    taxaorcamento40 = taxaSemanal40Kg*7; 
    console.log('o cão pesa',pesoDoCao,'Kg logo a taxa semanal será de',taxaSemanal40Kg,'Reais semanais'); 
    console.log('custo para hospedar o animal por uma semana:',taxaorcamento40);
}else if(pesoDoCao >= 40 && pesoDoCao <= 155){ 
    taxaorcamento155 = taxaSemanal155Kg*7; 
    console.log('o cão pesa', pesoDoCao,'Kg logo a taxa semanal será de',taxaSemanal155Kg,'Reais semanais');  
    console.log('custo para hospedar o animal por uma semana:',taxaorcamento155);
} 

console.log('\nRG:',registroDoProprietario); 
console.log('O nome e a raça:',nomeERaca); 
console.log('idade do cão:',idadeDoCao); 