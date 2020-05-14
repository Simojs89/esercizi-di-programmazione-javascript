/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
function cocomi() {
  var operazion;
  operazion = document.getElementById("oper").value
  //a=document.getElementById("number1").value
  //b=document.getElementById("number2").value

  var a=parseInt(number1.value);
  var b=parseInt(number2.value);

var somma=a+b

  switch (true) {
    case operazion == "somma":
    document.getElementById("risposta").innerHTML="il risultato è "+ (Math.abs(a + b))
      break
    case operazion == "moltiplicazione":
    document.getElementById("risposta").innerHTML="il risultato è "+ (Math.abs(a * b))
      break
      case operazion == "sottrazione":
      document.getElementById("risposta").innerHTML="il risultato è "+ (Math.abs(a - b))
        break
        case operazion == "divisione":
        document.getElementById("risposta").innerHTML="il risultato è "+ (Math.abs(a / b))
          break
          case operazion == "media":
          document.getElementById("risposta").innerHTML="il risultato è "+ (Math.abs(a+b)/2)
            break
            case operazion == "potenza":
            document.getElementById("risposta").innerHTML="il risultato è "+ (Math.pow(a,b))
              break
}

}
