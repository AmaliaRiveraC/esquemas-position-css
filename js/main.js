var acendienteMayor = document.getElementsByClassName("acendienteMayor");
var padre = document.getElementsByClassName("padre");
var cajaChica = document.getElementsByClassName("hijo");

acendienteMayor[0].style.position = "relative";
acendienteMayor[1].style.position = "relative";

padre[0].style.position = "absolute";
padre[0].style.top = "100px";
padre[0].style.left = "100px";

padre[1].style.position = "absolute";
padre[1].style.top = "100px";
padre[1].style.left = "100px";

cajaChica[1].style.position = "absolute";
cajaChica[1].style.bottom = "200px";
cajaChica[1].style.right = "200px";