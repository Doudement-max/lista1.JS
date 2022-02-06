//a área de um retângulo é o comprimento de sua base 
var readlineSync = require('readline-sync'); 
 let baseDoPrimeiroRetangulo = parseFloat(readlineSync.question('comprimento da 1° base:')); 
 let alturaDoPrimeiroRetangulo = parseFloat(readlineSync.question('comprimento da 1° altura:')); 
 let baseDoSegundoRetangulo = parseFloat(readlineSync.question('comprimento da 2° base:')); 
 let alturaDoSegundoRetangulo = parseFloat(readlineSync.question('comprimento da 2° altura: ')); 
var calculandoPrimeiraBase = baseDoPrimeiroRetangulo*alturaDoPrimeiroRetangulo; 
var calculandoSegundaBase = baseDoSegundoRetangulo*alturaDoSegundoRetangulo; 
if(calculandoPrimeiraBase >= calculandoSegundaBase){ 
    console.log('a primeira base é maior:',calculandoPrimeiraBase); 
}else if(calculandoSegundaBase >= calculandoPrimeiraBase){ 
    console.log('a segunda base é maior:',calculandoSegundaBase);
}