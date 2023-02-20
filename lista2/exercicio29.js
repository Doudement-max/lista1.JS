/*Provas de vestibular  alternativas. A primeira alternativa vale 1
ponto, a segunda 10 pontos, a terceira 100 pontos, a quarta 1000 pontos e a quinta
10.000 pontos. Cada candidato deve assinalar as alternativas que considerar
corretas, somando os pontos correspondentes e escrever essa soma como sendo a
resposta no gabarito da prova. Por exemplo, se numa questão um determinado
candidato assinalou as alternativas 1, 2 e 3 como sendo as corretas, então sua
resposta seria 1+10+100 = 111; se tivesse assinalado as alternativas 1, 3 e 5 a
resposta seria 1+100+10.000 = 10.101. Se nenhuma alternativa for assinalada,
então a resposta seria 0; se forem assinaladas todas as alternativas, a resposta seria
1 + 10 + 100 + 1000 + 10.000 = 11.111. Crie um programa que leia a resposta
fornecida pelo candidato na prova e diga quais foram as alternativas que ele
assinalou.*/
var readlineSync = require('readline-sync');
let alternativa1 = readlineSync.question('alternativas: 1 a,b,c,d ou e'); 
let alternativa2 = readlineSync.question('alternativas: 2 a,b,c,d ou e?'); 
let alternativa3 = readlineSync.question('alternativas: 3 a,b,c,d ou e?'); 
let alternativa4 = readlineSync.question('alternativas: 4 a,b,c,d ou e?');  
let alternativa5 = readlineSync.question('alternativas: 5 a,b,c,d ou e?'); 
 
if(alternativa1 === 'a'){ 
    numero = 1;   
    alternativa1 = numero;
    console.log('vale um ponto',alternativa1); 
}else if(alternativa1 !== 'b'){   
    numeroErrado = 0; 
    alternativa1 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa1);
}else if(alternativa1 !== 'c'){ 
    numeroErrado = 0; 
    alternativa1 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa1);
}else if(alternativa1 !== 'd'){ 
    numeroErrado = 0; 
    alternativa1 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa1);
}else if(alternativa1 !== 'e'){ 
    numeroErrado = 0; 
    alternativa1 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa1);
}else{ 
    console.log(0);
} 
if(alternativa2 === 'b'){ 
    numero = 10;   
    alternativa2 = numero;
    console.log('vale um ponto',alternativa2); 
}else if(alternativa2 !== 'a'){   
    numeroErrado = 0; 
    alternativa2 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa2);
}else if(alternativa2 !== 'c'){ 
    numeroErrado = 0; 
    alternativa2 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa2);
}else if(alternativa2 !== 'd'){ 
    numeroErrado = 0; 
    alternativa2 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa2);
}else if(alternativa2 !== 'e'){ 
    numeroErrado = 0; 
    alternativa2 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa2);
}else{ 
    console.log(0);
}  
if(alternativa3 === 'c'){ 
    numero = 100;   
    alternativa3 = numero;
    console.log('vale um ponto',alternativa3); 
}else if(alternativa3 !== 'a'){   
    numeroErrado = 0; 
    alternativa3 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa3);
}else if(alternativa3 !== 'b'){ 
    numeroErrado = 0; 
    alternativa3 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa3);
}else if(alternativa3 !== 'd'){ 
    numeroErrado = 0; 
    alternativa3 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa3);
}else if(alternativa3 !== 'e'){ 
    numeroErrado = 0; 
    alternativa3 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa3);
}else{ 
    console.log(0);
}  
if(alternativa4 === 'd'){ 
    numero = 1000;   
    alternativa4 = numero;
    console.log('vale um ponto',alternativa4); 
}else if(alternativa4 !== 'a'){   
    numeroErrado = 0; 
    alternativa4 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa4);
}else if(alternativa4 !== 'b'){ 
    numeroErrado = 0; 
    alternativa4 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa4);
}else if(alternativa2 !== 'c'){ 
    numeroErrado = 0; 
    alternativa4 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa4);
}else if(alternativa4 !== 'e'){ 
    numeroErrado = 0; 
    alternativa4 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa4);
}else{ 
    console.log(0);
}  
if(alternativa5 === 'e'){ 
    numero = 10000;   
    alternativa5 = numero;
    console.log('vale um ponto',alternativa5); 
}else if(alternativa5 !== 'a'){   
    numeroErrado = 0; 
    alternativa5 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa5);
}else if(alternativa5 !== 'b'){ 
    numeroErrado = 0; 
    alternativa5 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa5);
}else if(alternativa5 !== 'c'){ 
    numeroErrado = 0; 
    alternativa5 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa5);
}else if(alternativa5 !== 'd'){ 
    numeroErrado = 0; 
    alternativa5 = numeroErrado;
console.log('resposta errada, não teve ponto',alternativa5);
}else{ 
    console.log(0);
} 
let calc = alternativa1+alternativa2+alternativa3+alternativa4+alternativa5;
console.log('total:',calc);