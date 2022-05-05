//Ejercicio 1

let num: number[] = new Array();
num.push(20, 14, 8, 0, 5, 19, 24);
console.log(num);

//ejercicio 2

let btnIngresarDatosEj2 = <HTMLButtonElement>(
  document.getElementById("btnIngresarDatosEj2")
);
let arregloEjercicio2: number[] = new Array();
let numeroEjercicio2: number;

btnIngresarDatosEj2.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    arregloEjercicio2.push(Number(prompt("ingrese un valor para el arreglo")));
  }
  console.log(arregloEjercicio2);
});

// ejercicio 3
let btnlargoArregloEj3 = <HTMLButtonElement>(
  document.getElementById("btnlargoArregloEj3")
);
let inputLargoArregloEj3 = <HTMLInputElement>(
  document.getElementById("inputLargoArregloEj3")
);
let btnlargoArregloEj3B = <HTMLButtonElement>(
  document.getElementById("btnlargoArregloEj3B")
);
let inputLargoArregloEj3B = <HTMLInputElement>(
  document.getElementById("inputLargoArregloEj3B")
);

let arregloEj3: string[] = new Array();
let largoArregloEj3: number;
let arregloEj3B: string[] = new Array();
let largoArregloEj3B: number;
const arregloNombresGuardados: string[] = new Array(
  "juan",
  "martin",
  "pedro",
  "lucas",
  "maria",
  "soledad",
  "sebastian",
  "agustina",
  "ramiro",
  "romina"
);

btnlargoArregloEj3.addEventListener("click", () => {
  largoArregloEj3 = Number(inputLargoArregloEj3.value);

  for (let i = 0; i < largoArregloEj3; i++) {
    arregloEj3.push(String(prompt("ingrese un nombre de persona ")));
  }
  console.log(arregloEj3);
});

btnlargoArregloEj3B.addEventListener("click", () => {
  largoArregloEj3B = Number(inputLargoArregloEj3B.value);
  if (largoArregloEj3B < 1 || largoArregloEj3B > 10) {
    alert("el tamañ del arreglo debe ser entre 1 y 10");
  } else {
    for (let i = 0; i < largoArregloEj3B; i++) {
      arregloEj3B.push(String(arregloNombresGuardados[i]));
    }
    console.log(arregloEj3B);
  }
});
