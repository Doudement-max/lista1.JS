//Provas de vestibular  
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