const lista1 = [
    100,
    200,
    300,
    500,
];

//Media artimetica



function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedio = sumaLista / lista.length;

    return promedio
}