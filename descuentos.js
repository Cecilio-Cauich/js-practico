function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;
    
    return precioConDescuento
}

function priceDiscount(){
    const inputPrices = document.getElementById("InputPrice");
    const priceValue = inputPrices.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento  = calcularPrecioConDescuento(priceValue,discountValue);

    document.getElementById("output-pricedescount").innerHTML = precioConDescuento;
}

