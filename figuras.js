// codigo cuadrado
console.group("CUADRADO");
function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrado (lado){
    return lado * lado;
}
console.groupEnd()

// codigo del triángulo

console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd()

//codigo circulo 
console.group('CIRCULO')
//PI
const PI = Math.PI;


//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

//Area
function areaCirculo(radio){
    return (radio * radio) * PI
} 

console.groupEnd()

//Iteracción con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("salida-valor").innerHTML = perimetro+"cm";
}
function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value;

    const area = areaCuadrado(value);
    document.getElementById("salida-valor").innerHTML = area+"cm2";
}