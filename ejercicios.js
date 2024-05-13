function ejercicio1() {
    console.log("Ejercicio 1");

    function mostrarMensaje(mensaje, callback) {
        if (typeof callback === 'function') {
            callback(mensaje)
        } else {
            console.log('¡No es una función!')
        }
    }

    mostrarMensaje('¡Cuidado! No ingreses datos personales en sitios malisiosos. 😨', console.warn)
}


function ejercicio2() {
    console.log("Ejercicio 2");
    function numeroAzar(variable, callback) {
        if (typeof variable === 'number') {
            callback(variable);
        } else {
            console.log('No es un número');
        }
    }

    const variable = 45;
    const variable1 = "Manzana";
    const variable2 = 2024;

    numeroAzar(variable, console.log);
    numeroAzar(variable1, console.warn);
    numeroAzar(variable2, console.log);

}


function ejercicio3() {
    console.log("Ejercicio 3");
    function calcular(a, b, callback) {
        if (typeof callback === 'function') {
            callback(a, b)
        } else {
            console.log('No es una función!')
        }
    }


    function suma(a, b) {
        return console.log(`La suma de ${a} y ${b} es: ${a + b}`);
    }


    function resta(a, b) {
        if (a > b) {
            console.log(`La resta de ${a} y ${b} es: ${a - b}`);
        } else {
            console.warn(`a es mayor que b 😱 por lo tanto obtendrás un valor negativo, el resultado es: ${a - b}`);
        }

    }


    function multiplicación(a, b) {
        return console.log(`La multiplicación de ${a} por ${b} es: ${a * b}`);
    }

    function división(a, b) {
        if (b !== 0) {
            console.log(`La división entre ${a} y ${b} es: ${a / b}`);
        } else {
            console.error('No se puede dividir por cero.');
        }
    }


    const a = 20;
    const b = 57;

    calcular(a, b, suma);
    calcular(a, b, resta);
    calcular(a, b, multiplicación);
    calcular(a, b, división);

}


function ejercicio4() {
    console.log("Ejercicio 4");
    function ordenSuperior(palabra, callback) {

        if (typeof callback === 'function') {
            callback(palabra)
        } else {
            console.warn('El callback no es una función 🤯');
        }
    }

    function minúsculas(palabra) {
        console.log(palabra.toLowerCase());
    }

    function mayúsculas(palabra) {
        console.log(palabra.toUpperCase());
    }

    const palabra = "PejeLagarto";

    ordenSuperior(palabra, minúsculas);
    ordenSuperior(palabra, mayúsculas);
}


function ejercicio5() {
    console.log("Ejercicio 5");
    function TiemposMayores(tiempoArray, callback) {

        const tiemposMayores = tiempoArray.filter(tiempo => tiempo / 60 > 2);

        callback(tiemposMayores);
    }

    const tiempos = [120, 80, 200, 100, 300];

    TiemposMayores(tiempos, function (nuevoArray) {
        console.log("Tiempos mayores a 2 horas:", nuevoArray);
    });
}

