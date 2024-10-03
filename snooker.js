var numer = Math.floor(Math.random()*10)+1;

function zmienslajd() 
{

numer++; if(numer>10) numer=1;

var plik = "<img src=numer+".jpeg\" />";

document.getElementById("champions").innerHTML = plik;

setTimeout("zmienslajd()",4000);
}

function name() 
{
 var  wynik=document.getElementById("champions").value;
 
 if(wynik==1)   document.getElementById("champion").innerHTML = "Zdjęcie nr 1";

if(wynik==2)   document.getElementById("champion").innerHTML = "Zdjęcie nr 2";

if(wynik==3)   document.getElementById("champion").innerHTML = "Zdjęcie nr 3";

if(wynik==4)   document.getElementById("champion").innerHTML = "Zdjęcie nr 4";

if(wynik==5)   document.getElementById("champion").innerHTML = "Zdjęcie nr 5";

if(wynik==6)   document.getElementById("champion").innerHTML = "Zdjęcie nr 6";

if(wynik==7)   document.getElementById("champion").innerHTML = "Zdjęcie nr 7";

if(wynik==8)   document.getElementById("champion").innerHTML = "Zdjęcie nr 8";

if(wynik==9)   document.getElementById("champion").innerHTML = "Zdjęcie nr 9";

if(wynik==10)   document.getElementById("champion").innerHTML = "Zdjęcie nr 10";

setTimeout("name()",5000);
}