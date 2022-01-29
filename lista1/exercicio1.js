//Expressões numéricas  
/*var readlineSync = require('readline-sync');  
 
let soma1 = 4+6*2; 
let soma2 = 10/5+8; 
let soma3 = 12/4+16/2; 
let soma4 = 17+20/5; 
let soma5 = 22/5+7; 
let soma6 = 39/10; 
let soma7 = 19%(2+3);
let soma8 = 3+4*20/3; 
let soma9 = 36%(6+2);
let soma10 = 8%2*0; 

console.log(soma1,soma2,soma3,soma4,soma5,soma6,soma7,soma8,soma9,soma10);*/ 
var readlineSync = require('readline-sync'); 
var valor 
var valor1 
var oper  
oper = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)"); 
valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n")); 
valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n")); 

function doOpoeration(operator, value1, value2) { 
    if (operator == "+") { 
        return value1 + value2;
    } else if 
     (operator == "-") { 
         return value1 - value2; 
     } else if 
       (operator == "*") { 
           return value1 * value2; 
       } else if 
         (operator == "/") { 
             return value1 / value2;
         }else { 
              throw new Error('Operação invalida')
         }
} 

console.log('O resultado é', doOpoeration(oper,valor,valor1));