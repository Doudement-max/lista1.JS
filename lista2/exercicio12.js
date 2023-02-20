/*Um certo petshop 
De acordo com a
tabela de preços desse estabelecimento, a taxa semanal para hospedagem é de R$
50.00 para cães com menos de 8 kg, R$ 70.00 para cães que pesem entre 8 e 15
kg inclusive, R$ 100.00 para cães entre 15 e 40 kg e R$ 125.00 para cães com
mais de 40 kg. Construa um algoritmo que leia o RG do proprietário de um cão,
bem como o nome, raça, idade e peso desse cão e, de posse desses dados, exiba

um orçamento contendo todos os dados de entrada e o custo para hospedar o
animal por uma semana.*/ 

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