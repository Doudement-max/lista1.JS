//fizzBuzz é um comparador e vai ter um retorno logo em seguida. 
 
//Divisivel por 3 => Fizz 
//Divisivel por 5 => Buzz 
// Divisivel por 3 e 5 => FizzBuzz 
//Não divisivel por 3 ou 5 => entrada 
// não é um número => (return) 'Não é um número'
 
/*const resultado = fizzBuzz(3); 
console.log(resultado) 

function fizzBuzz(entrada){

}*/


const resultado = fizzBuzz(15); 
console.log(resultado); 

function fizzBuzz(entrada){ 
    if (entrada % 3 === 0 && entrada % 5 === 0){
        return 'fizzBuzz';  
    if(typeof entrada !== 'number')
    return 'não é um número';   
    if(entrada % 3 === 0){    //o 0 indica que é divisivel por 3 não esqueça essa formula 
    return 'Fizz';
    }  
    if (entrada % 5 === 0){
        return 'Buzz'; 
    } 
  
        return entrada;
    }
}