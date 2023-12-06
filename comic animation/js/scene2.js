
    var parrafoJesus = document.querySelector('.parrafo-jesus')
    var jesus = document.querySelector('.jesus')
    
    jesus.addEventListener('mouseover', textoJesus)

function  textoJesus(){
    parrafoJesus.classList.remove('oculto')
}
   
var parrafomaria = document.querySelector('.parrafo_maria ')
    var jesus = document.querySelector('.maria')
    
    jesus.addEventListener('mouseover', textoMaria)

function  textoMaria(){
    parrafomaria.classList.remove('oculto')
}

var button = document.querySelector('.jesus');

var infos = document.querySelector('.parrafo-jesus');

function click() {
  infos.classList.toggle('show')
}

function hover() {
  infos.classList.add('show')
}

function noHover() {
  infos.classList.remove('show')
}

button.addEventListener('click', click);

button.addEventListener('mouseover', hover);

button.addEventListener('mouseout', noHover);

/*  */
/*  var mover = document.querySelector('.maria');

var parrafo = document.querySelector('.parrafo_maria ');

function click() {
  parrafo.classList.toggle('mouse')
}

function hover() {
  parrafo.classList.add('mouse')
}

function noHover() {
  parrafo.classList.remove('mouse')
}

mover.addEventListener('click', click);

mover.addEventListener('mouseover', hover);

mover.addEventListener('mouseout', noHover);
  */