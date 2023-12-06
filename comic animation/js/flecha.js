// Obtener los elementos del DOM
var button = document.getElementById("myBtn");
var hand = document.getElementById("hand");

// Añadir un evento de click al botón
button.addEventListener("click", function() {
  // Cambiar el color del botón y de la mano
  button.style.backgroundColor = "";
  hand.style.filter = "hue-rotate(120deg)";
});

// Añadir un evento de animación al inicio de la animación de la mano
hand.addEventListener("animationstart", function() {
  // Mostrar un mensaje en la consola
  console.log("La animación ha comenzado");
});

// Añadir un evento de animación al final de la animación de la mano
hand.addEventListener("animationend", function() {
  // Mostrar un mensaje en la consola
  console.log("La animación ha terminado");
});

// Añadir un evento de animación cada vez que se repita la animación de la mano
hand.addEventListener("animationiteration", function() {
  // Mostrar un mensaje en la consola
  console.log("La animación se ha repetido");
});