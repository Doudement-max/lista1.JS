/*function areaCirc(raio){
    const PI = 3.14 
    return raio*raio*PI; 
} 
console.log(areaCirc(10)); 
console.log(areaCirc(10)); 
console.log(areaCirc(10));*/ 
  
let execucao = 0; //efeito colateral
function somar(a , b){
    execucao++;
    return a + b;
}  
console.log(execucao); //o valor inicial do efeito colateral
console.log(somar(25 , 75)); 
console.log(execucao); // o valor final do efeito colateral
//Aqui observamos que a variável const está dentro da função, logo vai ser pura.  