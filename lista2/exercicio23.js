//carpintaria 
var readlineSync = require('readline-sync'); 
let numeroOrcamento = parseFloat(readlineSync.question('numero do Orçamento'));  
let valorDaPlaca = parseFloat(readlineSync.question('valor da placa escolhida:'));
let nomeDoCliente = readlineSync.question('nome do cliente:'); 
let tiposDeMadeiras =parseFloat(readlineSync.question('tipo de madeira digite 1 pra ver:'));  
let numeroDeCaracteristicas = parseFloat(readlineSync.question('tipos de caracteristicas:')); 
let cor = readlineSync.question('qual a cor branco,preto, vale lembrar que dourado vale 60 reais:'); 
 
if( valorDaPlaca >= 300 && valorDaPlaca < 9999){  
 let auxPinus = valorDaPlaca+tiposDeMadeiras; 
     valorDaPlaca = auxPinus; 
     console.log('valor da madeira de pinus:',auxPinus); 
}else if(valorDaPlaca >= auxAngelim){ 
 let calculo = 150+valorDaPlaca;
 let auxAngelim = calculo+tiposDeMadeiras;  
      valorDaPlaca = auxAngelim;  
    console.log('valor da madeira de angelim:(150+):',auxAngelim);  
 
}else{
    console.log('\nvalor de placa não coincide com valor estimado.')
} 
if(cor === "preto" || cor === "branco"){ 
    console.log('foi escolhido a cor:',cor);
}else if(cor === "\ndourado"){  
    let aux = 60.00; 
    cor = aux;
    console.log('foi acrescentado',aux,'reais pela cor dourada'); 
}else{  
    console.log('\ncor não aceita');
} 
if(numeroDeCaracteristicas > 1 && numeroDeCaracteristicas <= 12){ 
    console.log('\no numero de caracteristicas:',numeroDeCaracteristicas,'esse numero de caracteristicas estão incluido no valor minimo'); 
}else if(numeroDeCaracteristicas > 13 && numeroDeCaracteristicas < 9999){ 
    let auxCaracteristicas = 15.00; 
    numeroDeCaracteristicas = auxCaracteristicas; 
    console.log('o numero de caracteristicas grandes vai ter um valor adicional:',auxCaracteristicas,'o valor total vai ser:',auxCaracteristicas+valorDaPlaca);
}