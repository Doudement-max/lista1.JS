/*cores primarias As cores vermelho, azul e amarelo são chamadas de cores primárias porque
não podem ser obtidas a partir de outras cores e, quando misturadas,
resultam numa cor secundária, de acordo com as seguintes regras:
• vermelho + azul = roxo;
• vermelho + amarelo = laranja;
• azul + amarelo = verde.

Se o usuário inserir algo diferente de “vermelho”, “azul” ou “amarelo”, o
programa deverá exibir uma mensagem de erro. Caso contrário, o programa deve
exibir o nome da cor secundária resultante.*/
let coresPrimarias='vermelho + azul'; 

switch (coresPrimarias){ 
   case  'vermelho + azul':
    console.log('roxo'); 
    break; 
     
    case 'vermelho + amarelo': 
    console.log('laranja'); 
    break; 
     
    case 'azul + amarelo': 
    console.log('verde'); 
    break; 

    default: 
    console.log('erro');    

}