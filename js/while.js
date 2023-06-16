function multiplos() {
    let numero = document.getElementById('multiplos').value;
    let numerosMultiplos = [];
    let i = 1;
    while (i <= numero) {
        if (i % 5 === 0) {
            numerosMultiplos.push(i);
        }
        i++;
    }
    let resultado = numerosMultiplos.join(", ")
    alert("Los multiplos de 5 hasta el numero " + numero + " son: " + resultado);
}

function loteria() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let i = 1;

    while (i <= 50) {
        if (i === numero1 || i === numero2) {
            console.log(i + " ¡Lotería!");
        } else {
            console.log(i);
        }
        i++;
    }
}
function numeros() {
    let numerosArreglo = [];
    let secuenciaNumero;

    while (true) {
        secuenciaNumero = parseInt(prompt("Ingrese un número (0 para terminar): "));
        if (secuenciaNumero === 0) {
            break;
        }
        numerosArreglo.push(secuenciaNumero);
    }
    console.log("Los números capturados son:", numerosArreglo);
}
function palabras() {
    let palabras = [];
    let palabra;

    while (true) {
        palabra = prompt("Ingrese una palabra (deje vacío para terminar): ");
        if (palabra === "") {
            break;
        }
        palabras.push(palabra);
    }

    let concatenacionPalabras = palabras.join("");
    console.log("La concatenación de las palabras es:", concatenacionPalabras);
}
function dias () {
    let dia;

while (true) {
  dia = prompt("Ingrese un día de la semana (Digitar domingo para salir): ").toLowerCase();

  if (dia === "domingo") {
    alert("Ve a descansar");
    break;
  }

  switch (dia) {
    case "lunes":
      alert("Hoy es lunes, inicio de semana");
      break;
    case "martes":
      alert("Hoy es martes");
      break;
    case "miércoles":
      alert("Hoy es miércoles");
      break;
    case "jueves":
      alert("Hoy es jueves");
      break;
    case "viernes":
      alert("Hoy es viernes");
      break;
    case "sábado":
      alert("Hoy es sábado, inicia el fin de semana");
      break;
    default:
      alert("No es un día de la semana");
      break;
  }
}
}