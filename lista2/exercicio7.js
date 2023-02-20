/*Uma certa operadora de telefonia móvel 
a. As primeiras 60 mensagens estão incluídas no plano básico;
b. Se o usuário mandar mais de 60 mensagens, cada mensagem adicional
custará R$ 0.05, até o limite de 180 mensagens;
c. Acima de 180 mensagens, o valor de cada uma delas passa a R$ 0,10;
d. A soma dos impostos estaduais e federais amonta a 12% do valor de cada
fatura.
Com base nessas informações, crie um algoritmo para ler o número total de
mensagens enviadas por um usuário. Ao final, calcule o valor da conta e mostre
todos os dados, incluindo o valor da conta com e sem impostos.*/ 
 
var readlineSync = require('readline-sync'); 
 let numeroDeOperadora = parseFloat(readlineSync.question('numero total de mensagens enviadas:'));  
 let valorPorSMS = 5.00; 
 let taxaPorValorDaFatura = 12%(valorPorSMS);  
 let valorDaConta = numeroDeOperadora/valorPorSMS; 
 let valorDaContaComImpostos = numeroDeOperadora/taxaPorValorDaFatura;
if(numeroDeOperadora > 1 && numeroDeOperadora <= 60){ 
    console.log('plano básico ativo serão enviados no maximo60 mensagens.',numeroDeOperadora);
}else if(numeroDeOperadora > 61 && numeroDeOperadora < 180){ 
    console.log('foi ultrapassado o limite do plano basico, custará 0,05 reais até o limite de 180 mensagens',numeroDeOperadora); 
}else if(numeroDeOperadora === 181){ 
    console.log('foi ultrapassado o limite do plano, custará o valor de 0,10 reais cada.',numeroDeOperadora)
}else{
    console.log('mensagem não enviada.');
} 
console.log('valor da conta sem impostos:',valorDaConta,'mensal'); 
console.log('valor da conta com impostos:',valorDaContaComImpostos,'mensal');