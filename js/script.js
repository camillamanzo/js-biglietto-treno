
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//  1-  il prezzo del biglietto è definito in base ai km (0.21 € al km)
//  2-  va applicato uno sconto del 20% per i minorenni
//  3-  va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let numeroKilometri = parseInt( prompt("Quanti kilometri desidera percorrere?") );
let etaPasseggero = parseInt( prompt("Quanti anni ha?") );
const costoBiglietto = parseFloat( numeroKilometri * 0.21).toFixed(2);

const costoPerMinorenne = parseFloat( costoBiglietto - ( (costoBiglietto / 100) * 20) ).toFixed(2);
const costoPerOver = parseFloat( costoBiglietto - ( (costoBiglietto / 100) * 40) ).toFixed(2);

document.getElementById("kilometri").innerHTML = numeroKilometri + "km";
document.getElementById("eta").innerHTML = etaPasseggero + " anni";

if (etaPasseggero < 18){
    document.getElementById("costo-biglietto").innerHTML = costoPerMinorenne + "\u20AC";
 } else if (etaPasseggero > 65){
    document.getElementById("costo-biglietto").innerHTML = costoPerOver + "\u20AC";
 } else if (Number.isNaN(numeroKilometri) || Number.isNaN(etaPasseggero)){
    document.getElementById("costo-biglietto").innerHTML = ("Per favore scriva un numero valido.");
} else {
    document.getElementById("costo-biglietto").innerHTML = costoBiglietto;
}
