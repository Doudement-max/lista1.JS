//os famosos  loops (ou laços). 

//1.For 
//2.while 
//3.Do..while 
//4. For..In 
//5. For..of  

//exemplo for 
 
for(let i = 1; i <= 5;i++) {
    if(i % 2 !== 0){ 
        console.log(i);
    }
}

//While loop 

let i = 5; 

while (i >= 1){ 
    if(i % 2 !== 0){
        console.log(i);
    } 
    i--;
} 

let i = 0; 
do { // a diferença do  para o while é que ele vai fazer no minimo uma vez e ele só vai verificar a condição.
    console.log('digitando'); 
    i++; // nunca se esqueça disso
}while (i < 10)

const pessoa ={ 
    nome: 'pedro', 
    idade:25
};  

//key-value
for(let chave in pessoa) {
    console.log(chave,pessoa.nome); //ou entre [''] onde tambem pode ser defindo o nome

} 

const cores = ['Vermelho','Blue','Verde'] 

for (let indice in cores){
    console.log(cores,[indice])
}

for(let cor of cores){ 
    console.log(cor);
}