//escola
 var readlineSync = require('readline-sync'); 
 let nomeDoAluno = readlineSync.question('nome do aluno:');
let notaDoAluno = parseFloat(readlineSync.question('nota do aluno:'));  
let faltas = parseFloat(readlineSync.question('numero de faltas:')); 
 
if (notaDoAluno >= 28 && notaDoAluno <= 50 && faltas >=0 && faltas <= 43){ 
    console.log('aluno foi aprovado, e não passou 25% do numero de faltas',notaDoAluno,faltas);
}  
else if (notaDoAluno <= 0 && notaDoAluno <=19 && faltas <= 45){ 
    console.log(' aluno foi reprovado, e utrapassou o numero de faltas '),notaDoAluno,faltas;
} 
else if (notaDoAluno >= 20 && notaDoAluno <= 24 && faltas >=33){ 
  console.log('o aluno ficou de recuperação',notaDoAluno,faltas);
} 
