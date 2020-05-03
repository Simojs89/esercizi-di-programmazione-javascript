/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/
var number = prompt("inserisci il numero");
var maxtable=10;
var risultato=0;

while (number<=maxtable) {
  risultato = number*5;number++;

console.log (risultato);

}
