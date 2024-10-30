function palindromo(str) {
  // Convertimos el string a minúsculas y eliminamos caracteres no alfanuméricos
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  const len = cleanStr.length;

  // Otra alternativa:
  ///Invertimos el string
  ///   const reverse = cleanStr.split("").reverse().join("");

  //   Comparamos el string original modificado con su versión invertida
  //   return cleanStr === reverse ? "Es un palindromo" : "No es un palindromo";

  for (let i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Iniciar el temporizador
console.time("Tiempo de ejecución");

// Llamar a la función y almacenar el resultado
const resultado = palindromo("Ojo");

// Detener el temporizador
console.timeEnd("Tiempo de ejecución");

// Imprimir el resultado de la función
console.log(resultado ? "Es un palíndromo" : "no es un palíndromo");
