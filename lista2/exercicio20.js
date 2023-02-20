/*valor do comprimento de um triangulo triângulo, classifique-o em equilátero, isósceles ou escaleno. Lembre, um
triângulo é equilátero quando o comprimento de todos os seus lados for igual, é
isósceles quando apenas um dos lados tiver comprimento diferente e é escaleno
quando todos os lados tiverem comprimentos diferentes dos demais lados.*/
var readlineSync = require('readline-sync');  
 let ladoDireito = parseFloat(readlineSync.question('lado direito:'));
 let ladoEsquerdo = parseFloat(readlineSync.question('lado esquerdo:')); 
 let alicerce = parseFloat(readlineSync.question('alicerce:')); ;  
 
 
if(ladoDireito === ladoEsquerdo && ladoEsquerdo == alicerce){ 
    console.log('Equilatero\n');
}else if(ladoDireito != ladoEsquerdo && ladoDireito != alicerce && ladoEsquerdo != alicerce){ 
    console.log('Escaleno\n');
}else{ 
    console.log('Isoceles\n');
} 
console.log('lado direito',ladoDireito,'lado esquerdo',ladoEsquerdo,'alicerce',alicerce);