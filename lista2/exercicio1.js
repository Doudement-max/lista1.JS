/*Considere as variáveis abaixo, inicializadas como segue: 
numero1 = 300 numero2 = 100 numero3 = 5
string1 = "Rinoceronte" string2 = "Zebra" string3 = "bug”*/ 
 
var readlineSync = require('readline-sync'); 
 let numero1 = 300; 
 let numero2 = 100; 
 let numero3 = 5; 
var string1 ="Rinoceronte";  
var string2 = "Zebra"; 
var string3 = "Bug";   
if(numero1 = numero3){ 
    console.log('Falsa');
}   
 if(numero1 > numero3){ 
     console.log('Verdadeira'); 
 }  
 if(numero2 < numero3){ 
     console.log('Falsa'); 
 } 
if(numero1 = string1){ 
    console.log('Ilegal'); 
}
if(numero1 = "Um"){ 
    console.log('Falsa'); 
} 
if(numero1 = "Trezentos"){
    console.log("Veradeira"); 
} 
if(numero1 = "300"){  
    console.log('Verdadeira')
} 
if(string2 = "Dois"){ 
    console.log("Falsa"); 
} 
if(string1 = "Rinoceronte"){ 
    console.log("verdadeira"); 
}