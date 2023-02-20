/*uma empresa de transportes: calcule o preço da remessa conforme a
seguinte tabela
Peso da encomenda Valor
500 gramas ou menos R$ 1,10
Mais de 500 gramas, mas não mais que
2 quilos

R$ 2,20
Mais de 2 quilos, mas não mais de 10
quilos

R$ 3,70

Mais de 10 quilos R$ 5,00 mais R$ 3,80/kg pelo peso

que ultrapassar 10 Kg*/ 

var readlineSync = require('readline-sync'); 
 let pesoDaEncomenda = parseFloat(readlineSync.question('Peso da encomenda:')); 
var calculoParaQuilos = pesoDaEncomenda/1000
if(pesoDaEncomenda <= 250 || pesoDaEncomenda === 500 ){ 
    console.log('são:',pesoDaEncomenda,'gramas','valor:1,10');
}else if(pesoDaEncomenda >= 500 && pesoDaEncomenda < 2000){ 
    console.log('são',pesoDaEncomenda,'gramas e Quilos',calculoParaQuilos,'valor: 2,20');
}else if(pesoDaEncomenda >= 2000 && pesoDaEncomenda < 10000){ 
    console.log('são:',calculoParaQuilos,'Quilos','valor: 3,70'); 
}else if(pesoDaEncomenda >= 10000){ 
    console.log('são',calculoParaQuilos,'Quilos valor: 5,00','será acrecentado 3,80 quilos pelo peso que uçtrapassar 10 quilos');
}else{ 
    console.log('quilos ou gramas incorretos.');
}