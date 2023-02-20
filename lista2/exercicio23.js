/*carpintaria  a. O valor mínimo de qualquer placa é de R$ 300,00;
b. Placas de angelim custam R$ 150,00 adicionais, mas placas de pinus não
possuem nenhum custo extra;
c. Frases com até 12 caracteres estão incluídas no valor mínimo; para frases
maiores, são cobrados R$ 15,00 por caractere;
d. Para placas com dizeres brancos ou pretos não se cobra adicional, mas se
ele contiver letras douradas, cobra-se R$ 60,00 a mais.
Baseado nessas informações, construa um algoritmo que leia o número de um
orçamento, o nome do cliente, tipo de madeira (angelim ou pinus), número de
caracteres da mensagem e a cor dos caracteres (branco, preto ou dourado). Ao
final, imprima todos os dados de entrada e o preço da placa orçada.
Após construir esse este algoritmo, tente modificá-lo para que o usuário informe
a mensagem que deverá ser esculpida ao invés do número de caracteres dessa
mensagem. Assim, para que o orçamento seja emitido, o próprio algoritmo deverá
contar quantos caracteres a mensagem contém, o que pode ser feito com a função
length. Por exemplo, se você armazenar a mensagem numa variável chamada
strMensagem, o número de caracteres será dado por length(strMensagem).*/

var readlineSync = require('readline-sync');   
 let valorDaPlaca = parseFloat(readlineSync.question('valor da placa escolhida:'));
 let tiposDeMadeiras =parseFloat(readlineSync.question('tipo de madeira para obter a pinus digite 0 ou digite 150 para obter angelim:'));  
 let nomeDoCliente = readlineSync.question('nome do cliente:'); 
 let numeroDeCaracteristicas = parseFloat(readlineSync.question('tipos de caracteristicas:'));  
 let cor =parseFloat(readlineSync.question('escolha a cor 0-branco,1-preto ou 2-dourado.')); 
 let valorDaCor = parseFloat(readlineSync.question('valor das cores são: 0-para branco ou preto e 30- para dourado'));
 let numeroDoOrcamento = valorDaPlaca+tiposDeMadeiras+numeroDeCaracteristicas+valorDaCor*cor;

if(tiposDeMadeiras > 0){ 
    console.log("madeira tipo pinus foi selecionada.");
}else if(tiposDeMadeiras > 150){ 
    console.log("madeira tipo angelim foi selecionada e seu valor é 150 R$ mais caro.");
}else{
       console.log('nenhuma madeira foi selecionada.');
}
if(valorDaPlaca > 300 && valorDaPlaca < 9999){ 
 let calc = valorDaPlaca+tiposDeMadeiras;  
    valorDaPlaca = calc;
    console.log('que teve um valor:',valorDaPlaca);
}else{  
    console.log('valor não aceito.');
} 
if(cor === 0){ 
    console.log('a cor selecionada foi a branca:');
}else if(cor === 1){
    console.log('a cor selecionada foi a preta:');
}else if(cor === 2){ 
 console.log('a cor selecionada foi o dourado');
}else{
    console.log('nenhuma cor foi selecionada');
}
if(valorDaCor <= 0){
    let calc = valorDaCor+cor; 
    valorDaCor = calc;
}else if(valorDaCor >= 2){ 
    let calc = valorDaCor+cor*30; 
    valorDaCor = calc;
}else{
    console.log('valor não aceito');
}
if(numeroDeCaracteristicas > 1 && numeroDeCaracteristicas <= 12){ 
    console.log('\no numero de caracteristicas:',numeroDeCaracteristicas,'esse numero de caracteristicas estão incluido no valor minimo'); 
}else if(numeroDeCaracteristicas > 13 && numeroDeCaracteristicas < 9999){ 
    let auxCaracteristicas = 15.00; 
    numeroDeCaracteristicas = auxCaracteristicas; 
    console.log('o numero de caracteristicas grandes vai ter um valor adicional:',auxCaracteristicas);
}  
console.log('o Orçamento ficou:',numeroDoOrcamento); 
console.log('nome:',nomeDoCliente)