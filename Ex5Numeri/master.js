/* Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.*/


var sequenzaNumeri = []

//popola l'array con 5 numeri inseriti dall'utente
var i = 0
while (i < 5) {
  var numero = parseInt(prompt("Prego inserire un numero"));
  sequenzaNumeri.push(numero)
  i++
}
console.log(sequenzaNumeri); //check

// somma degli items di sequenzaNumeri
console.log("La somma dei numeri inseriti è " + sequenzaNumeri.reduce((a, b) => a + b, 0));

//stampa in in html
var risultato = sequenzaNumeri.reduce((a, b) => a + b, 0);
document.getElementById('somma1').innerHTML = "La somma dei numeri inseriti è " + risultato;


/* ALTERNATIVA 1: SENZA REDUCE -----------------------------------------*/

var sequenzaNumeri = []

//popola l'array
var i = 0;
while (i < 5) {
  var numero = parseInt(prompt("Prego inserire un numero"));
  sequenzaNumeri.push(numero)
  i++
}

// arrai attuale
// var sequenzaNumeri = [sequenzaNumeri[0], sequenzaNumeri[1], sequenzaNumeri[2], sequenzaNumeri[3], sequenzaNumeri[4]]

//esegui somma
var j = 0;
var somma = 0;
while (j < sequenzaNumeri.length) {
  somma = somma + sequenzaNumeri[j];
 j++
}
//stampa in in html
document.getElementById('somma2').innerHTML = "La somma dei numeri inseriti è " + somma;

/* ALTERNATIVA 2: SENZA CREARE ARRAY, SOLO LOOP -----------------------------------------*/

var k = 0
var somma3 = 0
while (k < 5) {
  var numero = parseInt(prompt("Prego inserire un numero"));
  somma3 = somma3 + numero
  k++
}
//stampa in in html
document.getElementById('somma3').innerHTML = "La somma dei numeri inseriti è " + somma3;
