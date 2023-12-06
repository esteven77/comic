/* const caja = document.querySelector('#caja'); */

/* caja.addEventListener('dragstart', e => {
    console.log('Drag Start');
})

caja.addEventListener('dragend', e => {
    console.log('Drag End');
})

caja.addEventListener('drag', e => {
    console.log('Drag');
}) */

/* const contenedor = document.querySelector('#contenedor');

contenedor.addEventListener('dragenter', e => {
    console.log('Drag Enter');
})

contenedor.addEventListener('dragleave', e => {
    console.log('Drag Leave');
})

contenedor.addEventListener('dragover', e => {
    e.preventDefault();
    console.log('Drag Over');
})

contenedor.addEventListener('drog', e => {
    console.log('Drog');

    contenedor.appendChild(caja);
}) */

/* estilo 1 */

/* const dragObject = document.querySelector("#draggable-object");
const dropContainer = document.querySelector("#drop-point");
let deviceType = "";
let initialX = 0,
  initialY = 0;
let currentElement = "";
let moveElement = false; */

//Detect touch device
/*  const isTouchDevice = () => {
  try { */
    //We try to create TouchEvent(it would fail for desktops and throw error)
    /* document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};  */

//Drag and drop functions

/* function dragStart(e) {
  if (isTouchDevice()) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;  */
    //Start movement for touch
   /*  moveElement = true;
    currentElement = e.target;
  } else {
    e.dataTransfer.setData("text", e.target.id);
  }
} 

function dragOver(e) {
  e.preventDefault();
} */

//For touchscreen movement
/* const touchMove = (e) => {
  if (moveElement) {
    e.preventDefault();
    let newX = e.touches[0].clientX;
    let newY = e.touches[0].clientY;

    dragObject.style.top = dragObject.offsetTop - (initialY - newY) + "px";
    dragObject.style.left = dragObject.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
};
 
 const drop = (e) => {
  e.preventDefault();  */
  //For touch screen
   /* if (isTouchDevice()) {
    moveElement = false;  */
    //Get boundaries of div
    /* const currentDropBound = dropContainer.getBoundingClientRect();
    if (
      initialX >= currentDropBound.left &&
      initialX <= currentDropBound.right &&
      initialY >= currentDropBound.top &&
      initialY <= currentDropBound.bottom
    ) {
      dragObject.classList.add("hide");
      dropContainer.insertAdjacentHTML(
        "afterbegin",
        '<div id="draggable-object"></div>'
      );
    }
  } else {
    if (e.target.id == "drop-point") {
      dragObject.setAttribute("draggable", "false");

      dragObject.classList.add("hide");
      e.target.insertAdjacentHTML(
        "afterbegin",
        '<div id="draggable-object"></div>'
      );
    }
  }
};

window.onload = async () => {
  currentElement = "";
  dragObject.innerHTML = "";
  dropContainer.innerHTML = "";

  if (isTouchDevice) {
    dragObject.style.position = "absolute";
  }

  dragObject.addEventListener("dragstart", dragStart);
  //for touch screen
  dragObject.addEventListener("touchstart", dragStart);
  dragObject.addEventListener("touchend", drop);
  dragObject.addEventListener("touchmove", touchMove);

  dropContainer.addEventListener("dragover", dragOver);
  dropContainer.addEventListener("drop", drop);
}; 
 */
/* estlo 2 */

/* let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
  initialY = 0;
let moveElement = false; */

//Events Object
/* let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = ""; */

//Detech touch device
/* const isTouchDevice = () => {
  try { */
    //We try to create TouchEvent (it would fail for desktops and throw error)
    /* document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice(); */

//Start (mouse down / touch start)
/* draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault(); */
  //initial x and y points
  /* initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
 */
  //Start movement
  /* moveElement = true;
});
 */
//Move
/* draggableElem.addEventListener(events[deviceType].move, (e) => { */
  //if movement == true then set top and left to new X andY while removing any offset
  /* if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
}); */

//mouse up / touch end
/* draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
); */

/* draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
}); */

/* function visible(){
  let div = document.getElementById("etiqueta");
  div.style.visibility = 'visible'
}
function oculto(){
  let dv = document.getElementById("etiqueta");
  div.style.visibility = 'hidden';
} */

/* funcion 4 */

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}