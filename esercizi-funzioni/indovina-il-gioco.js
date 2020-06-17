/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/
let n=prompt("Inserisci un numero")
let ris="true";
let ris2="false";
function number() {
    
    if (n <= 7) {
                document.getElementById("elemento").innerHTML=ris 
        
}else{
    document.getElementById("elemento").innerHTML=ris2 
        
    }
    
}


function week() {
    if (n==1) {
        document.getElementById("elemento2").innerHTML=`1 - Lunedi`
        
    }else if (n==2) {
        document.getElementById("elemento2").innerHTML=`2 - Martedi`
        
    }else if (n==3) {
        document.getElementById("elemento2").innerHTML=`3 - Mercoledi`
        
    }else if (n==4) {
        document.getElementById("elemento2").innerHTML=`4 - Giovedi`
        
    }else if (n==5) {
        document.getElementById("elemento2").innerHTML=`5 - Venerdi`
        
    }else if (n==6) {
        document.getElementById("elemento2").innerHTML=`6 - Sabato`
        
    }else if (n==7) {
        document.getElementById("elemento2").innerHTML=`7 - Domenica`
        
    }else if (n>7) {
        document.getElementById("elemento2").innerHTML=`Errore`
}
}
