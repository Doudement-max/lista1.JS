//Uma certa operadora de telefonia móvel 
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