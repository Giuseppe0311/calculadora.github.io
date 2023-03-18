// *************cuantitativo******************
// selector de cuantitativo
const selectElement = document.getElementById("inputGroupSelect01");
// boton calcular
const btnclc = document.getElementById("calcular");
// ***************variables de calculo***********
// Area de Respuesta
const respuetato = document.getElementById("respuesta1");
// nivel de confianza
const nivelconf1 = document.getElementById("nivcon1");
// tamaño de poblacion
const tampobla = document.getElementById("tampo1");
// desviacion estandar
const desviacion = document.getElementById("deviaciones");
// maximo error de estimacion
const Maxerrod = document.getElementById("maxestimation1");
// eventos
selectElement.addEventListener("change", analisis);
btnclc.addEventListener("click", calcular);
// funciones
function analisis() {
  const variable1 = selectElement.value;
  switch (variable1) {
    case "1":
      nivelconf1.value = "";
      tampobla.value = "";
      desviacion.value = "";
      Maxerrod.value = "";
      respuetato.innerText = "";
      nivelconf1.disabled = false;
      tampobla.disabled = false;
      desviacion.disabled = false;
      Maxerrod.disabled = false;
      btnclc.disabled = false;

      break;
    case "2":
      nivelconf1.value = "";
      tampobla.value = "";
      desviacion.value = "";
      Maxerrod.value = "";
      respuetato.innerText = "";
      nivelconf1.disabled = false;
      desviacion.disabled = false;
      Maxerrod.disabled = false;
      tampobla.disabled = true;
      btnclc.disabled = false;

      break;
    default:
      nivelconf1.value = "";
      tampobla.value = "";
      desviacion.value = "";
      Maxerrod.value = "";
      respuetato.innerText = "";
      nivelconf1.disabled = true;
      tampobla.disabled = true;
      desviacion.disabled = true;
      Maxerrod.disabled = true;
      btnclc.disabled = true;
      break;
  }
}
function calcular() {
  const nivelconfianza = parseFloat(nivelconf1.value);
  const tamañopoblacion = parseFloat(tampobla.value);
  const desviacionestandar = parseFloat(desviacion.value);
  const maximoerror = parseFloat(Maxerrod.value);
  switch (selectElement.value) {
    case "1":
      if (
        !isNaN(nivelconfianza) &&
        !isNaN(tamañopoblacion) &&
        !isNaN(desviacionestandar) &&
        !isNaN(maximoerror)
      ) {
        let resultado;
        resultado =
          (tamañopoblacion *
            Math.pow(nivelconfianza, 2) *
            Math.pow(desviacionestandar, 2)) /
          ((tamañopoblacion - 1) * Math.pow(maximoerror, 2) +
            Math.pow(nivelconfianza, 2) * Math.pow(desviacionestandar, 2));
        respuetato.innerText =
          "El tamaño de muestra es : " + Math.ceil(resultado);
      } else {
        respuetato.innerText = "Asegúrese de ingresar datos numericos";
      }
      break;
    case "2":
      if (
        !isNaN(nivelconfianza) &&
        !isNaN(desviacionestandar) &&
        !isNaN(maximoerror)
      ) {
        let resultado;
        resultado =
          (Math.pow(nivelconfianza, 2) * Math.pow(desviacionestandar, 2)) /
          Math.pow(maximoerror, 2);
        respuetato.innerText =
          "El tamaño de muestra es : " + Math.ceil(resultado);
      } else {
        respuetato.innerText = "Asegúrese de ingresar datos numericos";
      }
      break;
  }
}

// *************cualitativo******************
// selector de cuantitativo
const selectElement1 = document.getElementById("inputGroupSelect02");
// boton calcular
const btnclc1 = document.getElementById("btncalcular2");
// ***************variables de calculo***********
// Area de Respuesta
const respuetato1 = document.getElementById("respuesta2");
// nivel de confianza
const nivelconf11 = document.getElementById("nivcon2");
// tamaño de poblacion
const tampobla1 = document.getElementById("tampo2");
// probabilidad positiva
const proppos = document.getElementById("propp");
// probabilidad negativa
const propnega = document.getElementById("propn");
// maximo error de estimacion
const Maxerrod1 = document.getElementById("maxestimation2");
// eventos
selectElement1.addEventListener("change", analisis1);
btnclc1.addEventListener("click", calcular1);
//funciones

function analisis1() {
  const variable11 = selectElement1.value;
  switch (variable11) {
    case "1":
      nivelconf11.value = "";
      tampobla1.value = "";
      proppos.value = "";
      propnega.value = "";
      Maxerrod1.value = "";
      respuetato1.innerText = "";
      nivelconf11.disabled = false;
      tampobla1.disabled = false;
      proppos.disabled = false;
      propnega.disabled = false;
      Maxerrod1.disabled = false;
      btnclc1.disabled = false;

      break;
    case "2":
      nivelconf11.value = "";
      tampobla1.value = "";
      proppos.value = "";
      propnega.value = "";
      Maxerrod1.value = "";
      respuetato1.innerText = "";
      nivelconf11.disabled = false;
      tampobla1.disabled = true;
      proppos.disabled = false;
      propnega.disabled = false;
      Maxerrod1.disabled = false;
      btnclc1.disabled = false;

      break;
    default:
      nivelconf11.value = "";
      tampobla1.value = "";
      proppos.value = "";
      propnega.value = "";
      Maxerrod1.value = "";
      respuetato1.innerText = "";
      nivelconf11.disabled = true;
      tampobla1.disabled = true;
      proppos.disabled = true;
      propnega.disabled = true;
      Maxerrod1.disabled = true;
      btnclc1.disabled = true;
      break;
  }
}

function calcular1() {
  const nivelconfianza1 = parseFloat(nivelconf11.value);
  const tamañopoblacion1 = parseFloat(tampobla1.value);
  const proppositiva = parseFloat(proppos.value);
  const propnegativa = parseFloat(propnega.value);
  const maximoerror1 = parseFloat(Maxerrod1.value);
  switch (selectElement1.value) {
    case "1":
      if (
        !isNaN(nivelconfianza1) &&
        !isNaN(tamañopoblacion1) &&
        !isNaN(proppositiva) &&
        !isNaN(propnegativa) &&
        !isNaN(maximoerror1)
      ) {
        let resultado1;
        resultado1 =
          (tamañopoblacion1 *
            Math.pow(nivelconfianza1, 2) *
            proppositiva *
            propnegativa) /
          (Math.pow(maximoerror1, 2) * (tamañopoblacion1 - 1) +
            Math.pow(nivelconfianza1, 2) * propnegativa * proppositiva);
        respuetato1.innerText =
          "El tamaño de muestra es : " + Math.ceil(resultado1);
      } else {
        respuetato1.innerText = "Asegúrese de ingresar datos numericos";
      }
      break;
    case "2":
      if (
        !isNaN(nivelconfianza1) &&
        !isNaN(proppositiva) &&
        !isNaN(propnegativa) &&
        !isNaN(maximoerror1)
      ) {
        let resultado1;
        resultado1 =
          (Math.pow(nivelconfianza1, 2) * propnegativa * proppositiva) /
          Math.pow(maximoerror1, 2);
        respuetato1.innerText =
          "El tamaño de muestra es : " + Math.ceil(resultado1);
      } else {
        respuetato1.innerText = "Asegúrese de ingresar datos numericos";
      }
      break;
  }
}
