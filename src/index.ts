//VARIABLES
// VARIABLES ejercicio1
let num: number[] = new Array();
// VARIABLES ejercicio2
let btnIngresarDatosEj2 = <HTMLButtonElement>(
  document.getElementById("btnIngresarDatosEj2")
);
let arregloEjercicio2: number[] = new Array();

// VARIABLES ejercicio3

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

//VARIABLES ejercicio4

let btnArregloEj4 = <HTMLButtonElement>document.getElementById("btnArregloEj4");
let arregloNombresEj4: string[] = new Array();
let arregloNumerosEj4: number[] = new Array();

//VARIABLES ejercicio5

let btnArregloEj5 = <HTMLButtonElement>document.getElementById("btnArregloEj5");
let largoArreglo5: number;
let arregloEjercicio5: number[] = new Array();
let sumaArregloEj5: number = 0;

//VARIABLES ejercicio6

let btnArregloEj6 = <HTMLButtonElement>document.getElementById("btnArregloEj6");
let arregloEj6: number[] = new Array();
let arregloEj6Invertido: number[] = new Array();
let largoArregloEj6: number;

//VARIABLES ejercicio7

let btnArregloEj7 = <HTMLButtonElement>document.getElementById("btnArregloEj7");
let arregloEj7: number[] = new Array();
let largoArregloEj7: number;
let ceros = 0;
let positivos = 0;
let negativos = 0;
let valorACalcular: number;

//*************/RESOLUCION DE EJERCICIOS**************************

//Ejercicio 1

num.push(20, 14, 8, 0, 5, 19, 24);
console.log(num);

//ejercicio 2

btnIngresarDatosEj2.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    arregloEjercicio2.push(Number(prompt("ingrese un valor para el arreglo")));
  }
  console.log(arregloEjercicio2);
});

// ejercicio 3

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
    alert("el tamaño del arreglo debe ser entre 1 y 10");
  } else {
    for (let i = 0; i < largoArregloEj3B; i++) {
      arregloEj3B.push(String(arregloNombresGuardados[i]));
    }
    console.log(arregloEj3B);
  }
});

// ejercicio 4

btnArregloEj4.addEventListener("click", () => {
  for (let i = 0; i < 2; i++) {
    arregloNombresEj4.push(String(prompt("ingrese un nombre")));
  }
  for (let i = 0; i < 3; i++) {
    arregloNumerosEj4.push(Number(prompt("ingrese un numero")));
  }

  console.log(arregloNombresEj4);
  console.log(arregloNumerosEj4);
});

//ejercicio 5

btnArregloEj5.addEventListener("click", () => {
  largoArreglo5 = Number(prompt("ingrese el tamaño del arreglo"));
  for (let i = 0; i < largoArreglo5; i++) {
    arregloEjercicio5.push(Number(prompt("ingrese un valor")));
    sumaArregloEj5 = sumaArregloEj5 + Number(arregloEjercicio5[i]);
  }
  console.log(sumaArregloEj5);
});

//ejercicio 6

btnArregloEj6.addEventListener("click", () => {
  largoArregloEj6 = Number(prompt("ingrese el tamaño del arreglo"));

  for (let i = 0; i < largoArregloEj6; i++) {
    arregloEj6.push(Number(prompt("ingrese un valor")));
  }
  arregloEj6Invertido = arregloEj6.reverse();
  console.log(arregloEj6Invertido);
});

// ejercicio 7

btnArregloEj7.addEventListener("click", () => {
  largoArregloEj7 = Number(prompt("ingrese el tamaño del arreglo"));
  for (let i = 0; i < largoArregloEj7; i++) {
    arregloEj7.push(Number(prompt("ingrese un valor")));
  }
  arregloEj7.forEach((element) => {
    valorACalcular = Number(element);
    console.log(valorACalcular);
    if (valorACalcular === 0) {
      ceros++;
    } else if (valorACalcular > 0) {
      positivos++;
    } else {
      negativos++;
    }
  });
  console.log(
    `hay ${ceros} ceros, ${positivos} positivos y ${negativos} negativos`
  );
});
