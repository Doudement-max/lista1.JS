//Crie um método para ler propriedades de um objeto 
 // exibir somente as propriedades do tipo string que estão nesse objeto 
 var readlineSync = require('readline-sync');
 const filme = { //String
    titulo : readlineSync.question('qual nome do filme?') , 
    ano : Number(readlineSync.question('qual ano do filme?')), 
    diretor: readlineSync.question('qual diretor'),
    personagem : readlineSync.question('qual personagem?')
}
exibirPropriedades(filme); 
function exibirPropriedades(obj) { 
for(prop in obj) 
 if(typeof obj[prop] === 'string') 
     console.log(prop,obj[prop])
}