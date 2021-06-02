let NowyDiv = document.createElement('div');
document.body.appendChild(NowyDiv);
var btnPodswietlenie = document.createElement("BUTTON");
var btnAutoZaznaczenie = document.createElement("BUTTON");
btnPodswietlenie.innerHTML = "Pokaż Poprawne litery";   
btnAutoZaznaczenie.innerHTML = "Zaznacz poprawne litery";   


NowyDiv.appendChild(btnPodswietlenie);
NowyDiv.appendChild(btnAutoZaznaczenie);

btnPodswietlenie.onclick = function() { VoidPodswietl()};
btnAutoZaznaczenie.onclick = function() { VoidZaznacz()};

        
function  VoidPodswietl() 
{
    fetch("https://raw.githubusercontent.com/Nubet/Wisielec-Cheat-XD/main/hackPODSWIETLANIE.js")
.then((res) => res.text()
.then((t) => eval(t)))
}
function   VoidZaznacz() 
{
    fetch("https://raw.githubusercontent.com/Nubet/Wisielec-Cheat-XD/main/hack.js")
    .then((res) => res.text()
    .then((t) => eval(t)))
}
