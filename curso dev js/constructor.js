 //Pascal Case - Um Dois Tres Quatro
 function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
this.marcadoCelular = marcadoCelular, 
this.tamanhotela = tamanhotela,
this. capacidadeBateria = capaciadeBateria, 
this.ligar = function(){ 
    console.log('Fazendo ligação...');  
     } 
} 

const celular = new Celular('asus',5.5,5000); 
console.log(celular); 

//A diferença é que um usa o new e a factory retorna dentro da função. 
