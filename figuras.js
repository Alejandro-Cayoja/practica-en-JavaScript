// Código del calculo de perimetro y área de un cuadrado

console.group("Cuadrados");   // console.group sirve para agrupar los mensajes en la consola pero debe tener un final determinado por console.groupEnd()
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del calculo de perimetro y área de un triángulo

console.group("Triángulo"); 
const ladoTriángulo1 = 6;
const ladoTriángulo2 = 6;
const baseTriángulo = 4;

console.log("Los lados del triángulo miden: " 
+ ladoTriángulo1 
+ "cm, " 
+ ladoTriángulo2 
+ "cm, " 
+ baseTriángulo 
+ "cm"
);

const alturaTriángulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriángulo + "cm");

const perimetroTriángulo = ladoTriángulo1 + ladoTriángulo2 + baseTriángulo;
console.log("El perimetro del triángulo es: " + perimetroTriángulo + "cm");

const areaTriángulo = ( baseTriángulo * alturaTriángulo ) / 2;
console.log("El area del triángulo es: " + areaTriángulo + "cm2");

console.groupEnd();

// Código del calculo de perimetro y área de una círculo

console.group("Círculo"); 

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
const diámetroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diámetroCirculo + "cm");

// PI
const PI = Math.PI; // Math tiene varias herramientas
console.log("PI es: " + PI);

// Perimetro
const perimetroCirculo = diámetroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo+ "cm");

// Área
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del circulo es: " + areaCirculo + "cm2");

console.groupEnd();