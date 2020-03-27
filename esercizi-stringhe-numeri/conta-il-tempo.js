/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var time = 12560;
const val1 =3600;
const val2=60;
hour = Math.floor(time/val1);
var resthour=time%val1;
min = Math.floor(resthour/val2);
var restmin =resthour%val2;
console.log(`${time}equivale a ${hour} ore, ${min} minuti`);
