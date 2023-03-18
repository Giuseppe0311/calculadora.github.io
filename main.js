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
        alert("tarado seguro no pusiste numeros a todo");
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
        alert("tarado seguro no pusiste numeros a todo");
      }
      break;
  }
}

// selectElement.addEventListener("change", (event) => {
//   const selectedOption = event.target.value;
//   console.log("La opción seleccionada es:", selectedOption);
// });
