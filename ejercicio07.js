// Ejercicio 7: Comprobación de Número Par
// Declara una función llamada "esPar" que acepte un parámetro "numero" y retorne verdadero si el número es par, de lo contrario falso

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "esPar"
function esPar(numero) {
    if (numero % 2 === 0)
        return true;
    else
        return false;
}

console.log(esPar(4));
console.log(esPar(7));

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    esPar
};
