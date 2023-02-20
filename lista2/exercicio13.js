/*funções matematicasElevar ao quadrado;
2. Raiz quadrada;
3. Seno;
4. Exponencial.

Depois que o usuário escolher uma opção digitando um número entre 1 e 4, efetue
a função matemática correspondente. O algoritmo deve verificar se a escolha
fornecida pelo usuário é válida (ou seja, é um número entre 1 e 4); se não for,
então deverá emitir uma mensagem de erro e finalizar.
Assumindo que a variável que você utilizará para armazenar o número que o
usuário informar seja chamada de vlNumero, as seguintes funções para lhe
permitem calcular as funções pedidas:

• sqr(vlNumero) para elevar ao quadrado;
• sqrt(vlNumero) para tirar a raiz quadrada;
• sin(vlNumero) para calcular o seno;
• exp(vlNumero) para calcular uma exponencial.

Após você criar seu algoritmo, modifique-o para incluir a seguinte opção no menu
do usuário:
0. Sair do programa.*/  

var readlineSync = require('readline-sync') 
var operadorMatematico = parseFloat(readlineSync.question('exiba um numero entre 1 e 4:1 elevar ao quadrado,2 raiz quadrada,3 seno,4 exponencial:')); 
let numeroEscolhido = parseFloat(readlineSync.question('escolha um numero:'));   
if(operadorMatematico === 1){ 
    elevadoAoQuadrado = Number(Math.pow(numeroEscolhido, 2));
    console.log('1° Elevado ao Quadrado:',elevadoAoQuadrado);
}else if(operadorMatematico === 2){  
    raizQuadrada =Number (Math.sqrt(numeroEscolhido));
    console.log('2° Raiz Quadrada:',raizQuadrada);
}else if(operadorMatematico === 3){ 
    seno =Number (Math.sin(numeroEscolhido)); 
    console.log('3° Seno:',seno);
}else if(operadorMatematico === 4){ 
    exponencial =Number (Math.exp(numeroEscolhido)); 
    console.log('4° Exponencial:',exponencial);
}else{
    console.log('escolha um numero entre 1 e 4');
}