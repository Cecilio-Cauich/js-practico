function alturaIsosceles (lado1, lado2, Base, altura){
    if(lado1 == lado2 && Base != lado1){
        console.log("Es un triangulo isosceles");
        const area =Math.sqrt((lado1 ** 2) - ((Base**2)/4));
        console.log('La altura del triangulo isosceles es :'+area);
    }
}

