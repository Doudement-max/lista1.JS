/*let nome = 'Pedro';//string literal 
let idade = 25; //number literal 
let estaAprovado = true; //boolen   
let sobrenome = undefined; // Undefined
 
let pessoa = {   

    nome: 'Pedro',  
    idade: 25,
    estaAprovado: true, 
    sobrenome: 'Doudement'
}; 

console.log (pessoa);*/ 

//Arrays 
 
/*let familia = [true,45,'pedro',17]; 
console.log(familia.length); 
console.log(familia[0]);  
let nomeDoColega = [true,'natajosons'];*/ 
 
//function ou função ela faz parte da base de todo software 
// Verbo + Substantivo 
/*let corSite = 'verde'; 
function resetaCor(cor, tonalidade){  
    corSite = cor + '   '+ tonalidade;
}; 

console.log (corSite); 
resetaCor('verde ',' claro'); 
console.log(corSite);  
 

let alteracaoDePc = 'computador win 7'; 
function mudarpc(alteracaoDePc){ 
    alteracaoDePc = win7 +'  '+ubu; 
};

console.log (alteracaoDePc); 
mudarpc('windows7 ',' ubuntu' ); 
console.log(alteracaoDePc);  

//tipos de funções  
 
function dizerNome(){ 
    console.log('pedro') 
}
//função sem retorno, realiza uma tarefa e não devolve nada 

dizerNome('pedro'); 

function MultiplicarPorDois(valor){ 
    return valor* 2; 
} 

//console.log(MultiplicaPorDois(5)); 

let resultado = MultiplicarPorDois(5); 

console.log(resultado);  

//Operadores Aritiméticos (matemáticos)  
let salario = 100; 
// +, - , *, / , ** 
console.log(salario + salario); 
console.log(salario - salario); 
console.log(salario*salario); 
console.log(salario / salario); 
//console.log( 5 ** 5);  
// ++ -- operadores de incremento e decremento  
let idade = 18; 
console.log(++idade); //++ antes da variavel 
console.log(--idade); 

//Operadores Atribuição 
let valorTecladoGamer= 100; 
console.log(valorTecladoGamer); 
valorTecladoGamer+= valorTecladoGamer; 

//Operadores de igualdade  
//Igualdade estrita 
console.log (1 === 1);  
console.log('1' === 1); //vai ser falso pelo 1 ser string  
 //sempre ultilize 3 comparações de iguais e não 2. Por ser  que tenha problemas futuros. 
 //por exeplo se usarmos 2 = a resposta 
 console.log ('1' == 1);//vai ser verdadeiro 

//Operadores ternário (muito importante)
//tem um cliente. 100 premim, comum 
let pontos = 100; 
let tipo = pontos > 100 ? 'premium' : 'comum'; 
 console.log (tipo) // tipo comum se for a cima de 100 e cliente premium
 
 //operadores lógicos  
 // e (&&) ele retorna TRUE se os dois operadores forem true 
 console.log(true && false); //resultado diferente o resultado será falso 
 let maiorDeIdade = true; 
 let possuiCarteiraDeTrabalho = true; 
 let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho; 
//operador lógico ou (||) ele vai retornar true se um dos operandos forem true  
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho; 
console. log(podeAplicar);// pra que ele seja verdadeiro ele vai ser avaliado como true 
//operador Not (!) 
let candidatoRecusado = !podeAplicar; 

console.log(candidatoRecusado);// candidato falso  
//Operadores boleanos  
//falsy 
//underfined 
//null 
// 0 
// false  
// '' 
//NaN - not Number 
//Truthy como ele o operador sempre vai retorna um valor ele encontrar logo a baixo 
 
let corPersonalizada = 'Vermelha'; 
 let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao; 

console.log(corPerfil);
  

 //Condições
// If ... else 

//Se a hora estiver entre 06:00 até 12:00 : Bom dia! 
//se estiver entre 12:00 até 18:00 : Boa tarde! 
 
let hora = 10;
if (hora > 6 && hora < 12) { 
    console.log('bom dia¹');
    // codigo a ser executado
} 
else if (hora > 12 && hora < 18){ 
    console.log('Boa tarde'); 
    // código a ser executado 
} 
else {  
    console.log('Boa noite');
    //codigo a ser executado 
}

//switch 

let permissao; //comum,gerente,diretor 

switch (permissao) { 
    case 'comum': 
    console.log('usuario comum'); 
    break; // o break vai fechar a condição criada  
    
    case 'gerente': 
    console.log('usuario gerente'); 
    break;  
     
    case 'diretor': 
    console.log('usuario diretor'); 
    break; 
    
    default: 
    console.log('usuario nãi reconhecido!');

}*/ 
