/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a=prompt("inserisci un valore");
var b=prompt("inserisci un valore");
var c=prompt("inserisci un valore");
var d=prompt("inserisci un valore");

var max= Math.max(a,b,c,d);//Con questo dato otteniamo il numero maggiore che inseriremo nel browser
var min= Math.min(a,b,c,d);//Con questo dato otteniamo il numero minore che inseriremo nel browser

console.log ('maggiore=',max);
console.log ("minore=",min );
