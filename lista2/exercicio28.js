/*jogo de loteria  a. O algoritmo deve gerar três números aleatórios entre 0 e 9;
b. O usuário deve fornecer um palpite com três números, também entre 0 e
9;
c. Cada um dos palpites do usuário deve ser comparado com os números
aleatórios, de acordo com a tabela abaixo:
Números Correspondentes Número de pontos
Nenhum número coincidente 0
Acertar um número 10
Acertar dois números 100
Acertar os três números, mas não na
mesma ordem em que foram
gerados 1000 

Acertar três números na mesma
ordem que os números aleatórios

1.000.000 

Ao final, exiba uma mensagem que inclua os chutes do usuário, os três números
sorteados aleatoriamente e a quantidade de pontos que o usuário ganhou.
*/
var readlineSync = require('readline-sync');  
 let numero1 = parseFloat(readlineSync.question('numero 1°:'));
 let numero2 = parseFloat(readlineSync.question('numero 2°:'));
 let numero3 = parseFloat(readlineSync.question('numero 3°:'));
  const resultado = Math.floor(Math.random() *9); 
 
 if(numero1 <= resultado){ 
     console.log('ganhou 10 pts!');
 }else if(numero1 >= resultado && numero2 >= resultado && numero3 >= resultado){ 
     console.log('acertou 3 ganhou 1000 pts!');
 }else if(numero1 >= resultado && numero2 >= resultado){ 
     console.log('acertou 2 ganhou 100 pts!');
 }else if(numero1 > resultado && numero2 > resultado && numero3 > resultado){ 
     console.log('acertou 3 na mesma ordem! 1.000.000');
 }