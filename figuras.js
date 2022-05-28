// codigo cuadrado
console.group("CUADRADO");

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: '+ladoCuadrado+'cm')
const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perímetro del cuadrado es ' + perimetroCuadrado+'cm')
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es ' + areaCuadrado+'cm')

console.groupEnd()

// codigo del triángulo

console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del cuadrado miden "+ladoTriangulo1+'cm, '+ladoTriangulo2+'cm, '+baseTriangulo+'cm')

const alturaTriangulo = 5.5;
console.log("La altura del trinagulo mide "+alturaTriangulo)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: "+perimetroTriangulo)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El area del triangulo es: '+areaTriangulo)

console.groupEnd()

//codigo circulo 
console.group('CIRCULO')

// Radio
const radioCirculo = 4;
console.log("El radio del circulo mide "+radioCirculo)
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide "+diametroCirculo)

//PI
const PI = Math.PI;
console.log("El valor de PI es: "+PI)

//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('La circunferencia del circulo mide: '+perimetroCirculo);

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El area del circulo es: ' + areaCirculo);

console.groupEnd()