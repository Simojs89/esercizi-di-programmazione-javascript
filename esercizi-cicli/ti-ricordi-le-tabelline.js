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
var x=0;

while (x<=maxtable) {
  risultato = (number*x);x++;


console.log (risultato);

}
