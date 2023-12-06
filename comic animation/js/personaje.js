var dos = document.querySelector('.dos')
dos.addEventListener('click', CambioImagen)

function CambioImagen(){
    dos.classList.remove('oculto')
    dos.setAttribute("src","../imagenes/cinco.png")
   
    setTimeout(()=>{
        dos.setAttribute('src',"../imagenes/seis.png")
    }, 1000);
    setTimeout(()=>{
        /* 
        - remover u ocultar la imagen del tipo de espalda classlist add oculto
        poner la animación con classList add*/
        /* dos.classList.add('src',"../imagenes/seis.png") */
        dos.classList.add('seis_mover')
    }, 1000);
   
}
