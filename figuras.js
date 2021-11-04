// Código del calculo de perimetro y área de un cuadrado

console.group("Cuadrados");   
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){          // usaremos la funcion para poder hacer más interactiva las unidades de las figuras, 
    return lado * 4;                       //con el parametro lado determinaremos un valor
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){   
    return lado * lado;                 
}

//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del calculo de perimetro y área de un triángulo

console.group("Triángulo"); 
//const ladoTriángulo1 = 6;
//const ladoTriángulo2 = 6;
//const baseTriángulo = 4;

//console.log("Los lados del triángulo miden: " 
//+ ladoTriángulo1 
//+ "cm, " 
//+ ladoTriángulo2 
//+ "cm, " 
//+ baseTriángulo 
//+ "cm"
//);

//const alturaTriángulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriángulo + "cm");

function perimetroTriángulo(lado1, lado2, base) {    // para el perimetro del triangulo, necesitamos 3 parametros
    return lado1 + lado2 + base;
}   
//console.log("El perimetro del triángulo es: " + perimetroTriángulo + "cm");

function areaTriángulo(base, altura) {    // para el area del triangulo, necesitamos 2 parametros
    return (base * altura) / 2;
}   
//console.log("El area del triángulo es: " + areaTriángulo + "cm2");

console.groupEnd();

// Código del calculo de perimetro y área de una círculo

console.group("Círculo"); 

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI; // Math tiene varias herramientas
console.log("PI es: " + PI);

// Perimetro

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();