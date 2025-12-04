// Ejercicio 5: Área de un Rectángulo
// Declara una función llamada "calcularAreaRectangulo" que acepte dos parámetros, "ancho" y "alto", y retorne el área del rectángulo

//escribe tu función aquí. Recuerda que el nombre exacto de la función es "calcularAreaRectangulo"
function calcularAreaRectangulo(base, altura) {
    return (base * altura) / 2;
}

let triangulo1 = calcularAreaRectangulo(5, 10);
console.log(triangulo1);

let triangulo2 = calcularAreaRectangulo(3, 6);
console.log(triangulo2);

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    calcularAreaRectangulo
};
