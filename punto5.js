const contarPalabras = (frase, palabra) => {
  const arr = frase.split(" ");
  let contador = 0;

  for(let word of arr) {
    if(palabra.toLowerCase() == word.toLowerCase()) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPalabras("Hacer un Algoritmo que se cuente las algoritmo que un se repite una un palabra", "un"));