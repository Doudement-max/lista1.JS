//dia mês e o ano arbitrários 
var readlineSync = require ('readline-sync'); 
const dia = parseFloat(readlineSync.question('dia:')); 
const mes = parseFloat(readlineSync.question('mes:')); 
const ano = parseFloat(readlineSync.question('ano:'));  
if(dia > 1 && dia < 31){ 
    console.log('dia aceito:',dia);
}else{ 
    console.log('dia não aceito.');
}
switch(mes){ 
    case 1: console.log('Janeiro',mes);
    break; 
    case 2:  
    console.log('Fevereiro',mes); 
    dia != 31; 
    dia === 29; 
    break;   
    case 3: console.log('Março',mes); 
    break; 
    case 4: console.log('Abril',mes); 
    break; 
    case 5: console.log('Maio',mes); 
    break; 
    case 6: console.log('Junho',mes); 
    break; 
    case 7:console.log('Julho',mes); 
    break; 
    case 8: console.log('Agosto',mes); 
    break; 
    case 9: console.log('Setembro',mes); 
    break; 
    case 10: console.log('Outubro',mes); 
    break; 
    case 11: console.log('Novembro',mes); 
    break; 
    case 12: console.log('Dezembro',mes);  
    break;
    default: console.log('mes inexistente!');
} 
if(ano > 0 && ano < 2022){ 
    console.log('ano aceito:',ano);
}else{ 
    console.log('ano não aceito');
}