/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/
var a = Array.from({length: 9}, () => Math.floor(Math.random() * 9));
var b=Array.from({length: 9}, () => Math.floor(Math.random() * 9));

var e=prompt("");

for (var i = 0; i <a.length; i++) {
    var sum = a.map(function (num, idx) {
    return num + b[idx]

  })

    var sot = a.map(function (num, idx) {
    return num - b[idx]

  })
}


switch (e) {
  case "somma":
  console.log("la somma degli array è: "+sum)

    break;
case "sottrazione":
console.log("la sottrazione degli array è: "+sot)

}






console.log(a);
console.log(b);
