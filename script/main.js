// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Sulla base di quello visto insieme in aula, ma non per forza identico;
// L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input,
//  e mi darà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto)
// e campi puliti (non vale fare refresh del browser);

//ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
//Il prezzo del biglietto è definito in base ai km (0.21 € al km),
//ma va applicato uno sconto del 20% per i minorenni
//e del 40% per gli over 65.
// --------------------------------------------------------------------//

//Dichiarazioni variabili
var price, valKm, valAge, valName;

var nameU = document.getElementById('nameU');
var km = document.getElementById('km');
var age = document.getElementById('age');
var details = document.getElementById('dati-biglietto');
var generateBtn = document.getElementById('calcola');
var resetBtn = document.getElementById('reset');
var tariffa = "Standard";
var numRef = Math.floor(Math.random() * 10000) + 1000;
var ticketBox = document.getElementById('ticket-box');

// Dichiaro cosa succede al click del bottone
generateBtn.addEventListener('click',
  function () {
//le mie variabili prendono valore inbase all'input inserito dall'utente nei form
    valKm = parseInt(km.value);
    valAge = age.value;
    valName = nameU.value;
    price = 0.21 * valKm;
    // stampo in console i dati ricavati dai form
    console.log("il nome è " + valName + " I km sono " + valKm + " Il range di età è " + valAge + " Il prezzo è " + price);
    // Condizioni di età per applicare lo sconto del 20% o 40%
    if (valAge === "under") {
      price =  price * 0.8;
      tariffa = "Young-Deluxe"
    } else if (valAge === "over") {
      price = price * 0.6;
      tariffa = "OldNotAlone"
    }
    //stampo in pagina il risultato del calcolo del biglietto
    details.innerHTML = "<td>" + valName + "</td>"+"<td>" + numRef + "</td>"+"<td>" + tariffa + "</td>"+"<td>" + price.toFixed(2) +"$"+"</td>";
    //stampo in console per debug il prezzo calcolato
    console.log("il prezzo dopo lo sconto è " + price + " tarrifa applicata : " + tariffa);
    //aggiungo style per transizione
    ticketBox.style.opacity = "1";
  }
)

resetBtn.addEventListener('click',
  function () {
    nameU.value = "";
    km.value = "";
    ticketBox.style.opacity = "0";
  }
)
