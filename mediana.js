function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedio = sumaLista / lista.length;

    return promedio
}

function calcularMediana(lista){

    function compara(a,b){
        return a - b
    }
    lista.sort(compara);

    const mitadLista1 = parseInt(lista.length / 2);

    function esPar(numerito){
        if (numerito%2===0){
            return true
        }else{
            return false
        }
    
    }
    let mediana;
    
    if(esPar(lista.length)){
        const elemeto1 = lista[mitadLista1];
        const elemeto2 = lista[mitadLista1+1];
        const promedioElemento1y2 = calcularPromedio(
            [elemeto1,
            elemeto2,]
        );
    
        mediana = promedioElemento1y2;
    
    }else{
        mediana = lista[mitadLista1]
    }

    return mediana
}



