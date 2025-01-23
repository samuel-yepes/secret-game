let numberSecret = 0;
let intentos = 0;
let numeroUsuario;
let listaNumerosSorteados = [];
let numerMaximo = 10;


function asignarTexto(Elemento, Texto) {
   let parrafo = document.querySelector(Elemento);
   parrafo.innerHTML = Texto;
   return;
}


function verificarIntento() {
   numeroUsuario = parseInt(document.getElementById('txtNumero').value);

   if (numeroUsuario === numberSecret) {
      asignarTexto('p', `¡Acertaste con exito!. lo hiciste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (numeroUsuario > numberSecret) {
         asignarTexto('p', 'el numero secreto es menor');
      } else {
         asignarTexto('p', 'el numero secreto es mayor');
      }
      intentos++;
      console.log(intentos);
      limpiarCaja();
   }

   return;
}

function limpiarCaja() {
   document.querySelector('#txtNumero').value = '';
}


function numeroAleatorio() {
   
   let numeroGenerado = Math.floor(Math.random() * numerMaximo) + 1;

   console.log("numero secreto: ",numeroGenerado);
   console.log("numeros sorteados",listaNumerosSorteados);
   
   if (listaNumerosSorteados.length == numerMaximo) {
        asignarTexto('p','ya se sortearon todos los numeros posibles. ¡Gracias por jugar!'); 
   } else{

   }

   if (listaNumerosSorteados.includes(numeroGenerado)) {
      return numeroAleatorio();
   }else{ 
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
   }

}

function condicionesIniciales() {
   asignarTexto('h1', '¡Juego secreto!');
   numberSecret = numeroAleatorio();
   asignarTexto('p', `Si quieres saber cual es el numero secreto ingresa un numero del 1 al ${numerMaximo}`);
   intentos = 1;
}

function reiniciarJuego() {
   limpiarCaja();
   condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
