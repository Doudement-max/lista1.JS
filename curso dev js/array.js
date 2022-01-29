 //como add novos elementos  
 const numeros = [1,2,3]; 
//colocando o array no inicio 
 numeros.unshift(0); 
 console.log(numeros);
//colocando o array no meio 
numeros.splice(1,0,'a'); 
console.log(numeros);
//colocando o array no final 
numeros.push(5); 
console.log(numeros); 

//ADD elementos em array 
const numero = [1,2,3,4]; 
console.log(numeros.indexOf(2)); 
console.log(numeros.lastIndexOf(2) !== -1); 

console.log(numero.includes(2)); 
