/*maquina de café Exemplo: Assuma que que um determinado domicílio consumiu 37 m3 de água
num determinado mês. Para o cálculo da respectiva fatura, deve-se distribuir esse
volume pelas faixas de consumo da tabela, como explicado abaixo:
(1) 1a faixa (franquia de 5 m3) – O consumo dos primeiros 5 (cinco) m3 de
água são faturados pela tarifa mínima, que é de R$ 37,47. Dos 37 m3
consumidos, restam 32 m3 para serem faturados pelas demais faixas de
consumo;
(2) 2a faixa (franquia de 5 m3) – Os próximos 5 (cinco) m3 que ultrapassam
o consumo da 1a faixa são cobrados pelo valor de excedente da 2a faixa
de consumo da tabela abaixo (5 m3 × R$ 1,16 = R$ 5,80). Dos 37 m3
consumidos, 5 foram faturados pela 1a faixa e outros 5 pela 2a faixa
restando, portanto, 27 m3 para serem faturados;
(3) 3a faixa (franquia de 5 m3) – Os próximos 5 (cinco) m3 que ultrapassam
o consumo da 2a faixa são cobrados pelo valor de excedente da 3a faixa
de consumo (5 m3 × R$ 6,46 = R$ 32,30). Até essa faixa, foram
faturados 15 m3 e restam ainda 22 m3 para serem faturados;
(4) 4a faixa (franquia de 5 m3) – Os próximos 5 (cinco) m3 que ultrapassam
o consumo da 3a faixa são cobrados pelo valor de excedente da 4a faixa
de consumo (5 m3 × R$ 6,49 = R$ 32,45). Até essa faixa, foram
faturados 20 m3 e restam ainda 17 m3 para serem faturados;
(5) 5a faixa (franquia de 10 m3) – Os próximos 10 (dez) m3 que ultrapassam
o consumo da 4a faixa são cobrados pelo valor de excedente da 5a faixa
de consumo (10 m3 × R$ 6,55 = R$ 65,50). Até essa faixa, foram
faturados 30 m3 e restam ainda 7 m3 para serem faturados;
(6) 6a faixa (franquia livre) – Os próximos 7 (sete) m3 que ultrapassam o
consumo da 5a faixa são cobrados pelo valor de excedente da 6a faixa
de consumo (7 m3 × R$ 11,08 = R$ 77,56). Até essa faixa, foram
faturados 37 m3, que foi o valor consumido pelo cliente;
(7) Para obter o valor da água consumida, deve-se somar o consumo em
cada faixa, ou seja, R$ 37,47 + R$ 5,80 + R$ 32,30 + R$ 32,45 + R$
65,50 + R$ 77,56 = R$ 251, 08;
(8) O valor referente ao esgoto corresponde a 80% do valor da água, ou
seja, R$ 251,08 × 0,8 = R$ 200,86;
(9) O valor da fatura é dado pela soma do consumo de água pela do esgoto,
ou seja, R$ 251,08 + R$ 200,86 = R$ 451,94.*/ 

var readlineSync = require('readline-sync'); 
let tiposDeCafe = readlineSync.question('tipos de café: normal,expresso,capuccino,mocaccino:'); 
let valorInceridoNaMaquina = parseFloat(readlineSync.question('qual o valor inserido:'))

 if(tiposDeCafe === 'normal'){  
 let cafeNormal = 1.05; 
     tiposDeCafe = cafeNormal;
     console.log('café selecionado foi café comum que tem o valor de:',tiposDeCafe);
 }else if(tiposDeCafe === 'expresso'){ 
 let cafeExpresso = 1.52; 
    let tiposDeCafe = cafeExpresso;
     console.log('café selecionado foi café expresso que tem o valor de:',tiposDeCafe); 
 }else if(tiposDeCafe === 'capuccino'){ 
let capuccino = 2.17;   
     let tiposDeCafe = capuccino;
     console.log('café selecionado foi capuccino que tem o valor de:',tiposDeCafe); 
 }else if(tiposDeCafe === 'mocaccino'){ 
 let mocaccino = 2.36; 
     let tiposDeCafe = mocaccino;
     console.log('café selecionado foi mocaccino que tem o valor de:',tiposDeCafe);
 }else{ 
     console.log('erro',0);
 } 

if(valorInceridoNaMaquina >= 0.1 && valorInceridoNaMaquina <= 9999){ 
console.log('valor foi:',valorInceridoNaMaquina); 
} 
console.log('valor do troco:',tiposDeCafe/valorInceridoNaMaquina); 
