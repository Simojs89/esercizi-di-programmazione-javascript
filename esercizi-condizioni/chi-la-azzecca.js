/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
function random (){

  var play1;
  var play2;
  var num = Math.round(Math.random()*(100-1)+1);

  play1= document.getElementById("uno").value;
  play2= document.getElementById("due").value;


  document.getElementById("random").innerHTML=(`il numero casuale è : `+ num);

if (play1==num) {
var risultato =document.createElement("p")
var testo= document.createTextNode(`numero esatto, hai vinto`)
risultato.appendChild(testo)
document.getElementById("risultato").appendChild(risultato)
}

if (play1!=num) {
  var risultato =document.createElement("p")
  var testo= document.createTextNode(`mi spiace non hai vinto`)
  risultato.appendChild(testo)
  document.getElementById("risultato").appendChild(risultato)
}

if (play2==num) {
  var risultato =document.createElement("p")
  var testo= document.createTextNode(`numero esatto, hai vinto`)
  risultato.appendChild(testo)
  document.getElementById("risultato").appendChild(risultato)
}
if (play2!=num) {
  var risultato =document.createElement("p")
  var testo= document.createTextNode(`mi spiace non hai vinto`)
  risultato.appendChild(testo)
  document.getElementById("risultato").appendChild(risultato)
}


}
