/*escola • O aluno deve ter, no máximo, 25% de faltas;
• A nota final deve ser igual ou superior a 7,00.
Construa um algoritmo para ler as notas que um aluno tirou nos 4 bimestres, o
número total de aulas e o número de faltas, mostrando ao final a situação do aluno
como sendo “Aprovado”, “Reprovado por Faltas” e “Reprovado por média”,
considerando que a reprovação por faltas se sobrepõe a reprovação por nota.
Após construir esse algoritmo, crie mais duas versões dele para prever as seguintes
situações:
• Um aluno pode ficar em recuperação se possuir frequência suficiente
(superior a 75%) e média superior a 5 mas inferior a 7;
• Caso um aluno reprove por média e faltas, sua situação deve ser
“Reprovado por Média e Faltas” (ao invés de simplesmente
“Reprovado por Faltas” como antes).*/
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
