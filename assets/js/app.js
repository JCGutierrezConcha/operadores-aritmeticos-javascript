function ejercicio2() {

    const numero1 = +prompt("Ingrese un primer número mayor que cero");
    const numero2 = +prompt("Ingrese un segundo número distinto al primero mayor que cero");

    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplica = numero1 * numero2;
    let divide = (numero1 / numero2).toFixed(2);
    let modulo = numero1 % numero2;

    alert(`
  Se ingresó como primer número el ${numero1} y como segundo número el ${numero2}:
  1-El resultado de la suma es: ${suma}
  2-El resultado de la resta es: ${resta}
  3-El resultado de la división es: ${divide}
  4-El resultado de la multiplicación es: ${multiplica}
  5-El resultado del módulo es: ${modulo}
  `);

}

function ejercicio3() {
    celsius = +prompt("Ingrese un valor de temperatura en grados celsius");

    let kelvin = (celsius + 273.15).toFixed(2);
    let fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);

    alert(`
La temperatura ingresada en grados Celsius es: ${celsius}
La temperatura en grados Kelvin es: ${kelvin}
La temperatura en grados Fahrenheit es: ${fahrenheit}`);
}

function ejercicio4() {
    let cantDias = +prompt("Ingrese una cantidad de dias");

    let agno = Math.floor(cantDias / 365);
    diasRestantes = (cantDias % 365);

    let semana = Math.floor(diasRestantes / 7);

    let dia = diasRestantes % 7;

    alert(`
La cantidad de dias ingresada es: ${cantDias}, que equivalen a:
${agno} años
${semana} semanas
${dia} dias`);
}

function ejercicio5() {
    const numero1 = +prompt("Ingrese el primer número");
    const numero2 = +prompt("Ingrese el segundo número");
    const numero3 = +prompt("Ingrese el tercer número");
    const numero4 = +prompt("Ingrese el cuarto número");
    const numero5 = +prompt("Ingrese el quinto número");

    let suma = numero1 + numero2 + numero3 + numero4 + numero5;
    let promedio = (suma / 5).toFixed(2);

    alert(`
    Los números ingresados son [${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}]
    La suma de estos números es: ${suma}
    El promedio de estos números es ${promedio} `);

}
