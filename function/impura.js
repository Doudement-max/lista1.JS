/*const PI  = 3.14; 

function areaCirc(raio){
    return raio*raio*PI;
} 
console.log(areaCirc(10)); 
console.log(areaCirc(10)); 
console.log(areaCirc(10));*/
 
//aqui observamos que é a mesma aplicação, mas a variavel está fora e por que isso ocorre? 
//Por que, a função vai ser depende de algo interno. 
 
/*function areaCirc(raio){ 
    
    return raio*raio* Math.PI; // estável 
} 
console.log(areaCirc(10)); 
console.log(areaCirc(10)); 
console.log(areaCirc(10));*/  

//Essa função aqui se aplica melhor que as outras anteriores, justamente por usar artimanhas do JS. 
// ou seja a estabilidade é melhor aplicada mesmo sendo uma função impura.  (e a chance de erro é baixa!); 

function gerarNumerosEntre(min,max){
    const fator = max - min +1; 
    return parseInt(Math.random()*fator)+min;
} 
console.log(gerarNumerosEntre(1 , 100000)); 

//Essa e outro exemplo de função impura porque, não tem um valor definido. 
 