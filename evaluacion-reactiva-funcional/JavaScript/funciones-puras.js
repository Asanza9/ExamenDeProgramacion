function calcularDiasRetraso(fechaPrestamo, fechaDevolucion, diasPermitidos) {
    const inicio = new Date(fechaPrestamo);
    const fin = new Date(fechaDevolucion);

    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    const diasTranscurridos = Math.floor(
        (fin - inicio) / milisegundosPorDia
    );

    const retraso = diasTranscurridos - diasPermitidos;

    return retraso > 0 ? retraso : 0;
}

/**
 * Calcula multa por días de retraso
 * Regla: $0.50 por día de retraso
 */
function calcularMulta(diasRetraso) {
    return diasRetraso * 0.5;
}

// Ejemplos de prueba:
console.log(calcularDiasRetraso("2024-01-01", "2024-01-20", 14)); // 6
console.log(calcularMulta(6)); // 3


/*
¿Por qué estas funciones son puras?

Porque siempre devuelven el mismo resultado con los mismos parámetros
y no dependen ni modifican variables externas.

¿Qué pasaría si usaras Date.now() dentro?

La función dejaría de ser pura porque el resultado cambiaría cada vez
que se ejecute, aunque los parámetros sean iguales.

Ventaja de funciones puras para testing

Son fáciles de probar, predecibles y no requieren configurar estados
externos ni dependencias.
*/
