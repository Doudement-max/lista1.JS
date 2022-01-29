//Valor de compra 
var readlineSync = require('readline-sync'); 
var produto1 
var produto2 
var produto3 
var produto4
var produto5 
  
produto1 = parseFloat(readlineSync.question('item 1:')); 
produto2 = parseFloat(readlineSync.question('item2:')); 
produto3 = parseFloat(readlineSync.question('item3:')); 
produto4 = parseFloat(readlineSync.question('item4:')); 
produto5 = parseFloat(readlineSync.question('item5:')); 

var subtotal = produto1+produto2+produto3+produto4+produto5; 
 var imposto = subtotal*6/100; 


 console.log('\nvalores dos 5 produtos comprados:','item1',produto1,'item2',produto2,'item3',produto3,'item4',produto4,'item5',produto5); 
 console.log('subtotal',subtotal); 
 console.log('imposto cobrado:',imposto);