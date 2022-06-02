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
function calcularAlturaTriangulo(base){
    
}
function perimetroTriangulo(lado1, lado2, base){
    return  lado1 + lado2 + base;
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

//cuadrado
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

//Triangulo
function calcularAreaTriangulo(){
    const input = document.getElementById("base")
    const input2 = document.getElementById("altura")
   
    const bases = input.value
    const alturas = input2.value

    const area = areaTriangulo(bases, alturas)
    document.getElementById("salida-tri").innerHTML = area;
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1")
    const val1 = input1.value

    const input2 = document.getElementById("lado2")
    const val2 = input2.value
    const input3 = document.getElementById("base")
    const val3 = input3.value

    const perimetro = perimetroTriangulo(val1,val2,val3)
    document.getElementById("salida-tri").innerHTML = perimetro;
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo")

    const valor = input.value
    const perimetro = perimetroCirculo(valor)
    document.getElementById("salida-cir").innerHTML = perimetro
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo")

    const valor = input.value
    const area = areaCirculo(valor)
    document.getElementById("salida-cir").innerHTML = area
}

//PRECIOS Y DESCUENTOS

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;
    
    return precioConDescuento
}

function priceDiscount(){
    const inputPrices = document.getElementById("InputPrice");
    const priceValue = inputPrices.value;

    const inputCoupon = document.getElementById("InputDiscount");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
      const resultP = document.getElementById("ResultP");
      document.getElementById("output-pricedescount").innerHTML = precioConDescuento+' pesos';
    }
}