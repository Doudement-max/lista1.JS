//dia seguinte: 
var readlineSync = require ('readline-sync'); 
const dia = parseFloat(readlineSync.question('dia:')); 
const mes = parseFloat(readlineSync.question('mes:')); 
const ano = parseFloat(readlineSync.question('ano:'));   
if(dia > 1 && dia < 31){ 
    console.log('dia aceito:',dia);
}else{
    console.log('dia não aceito:');  
} 
if(mes > 1 && dia < 12){ 
    console.log('mes aceito:',mes); 
}else if(mes === 2){ 
    dia != 31; 
    dia === 29; 
    console.log('mes aceito',mes);
}else{
    console.log('mes não aceito!');
}  
if(ano > 0 && ano < 2022){ 
    console.log('ano aceito',ano); 
}else{ 
    console.log('ano não aceito'); 
} 
console.log('\ndia seguinte',dia+1,'/',mes,'/',ano);
