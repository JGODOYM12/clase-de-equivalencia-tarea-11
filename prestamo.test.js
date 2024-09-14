// prestamo.test.js
const { esAprobadoParaPrestamo } = require('./prestamo');

// Pruebas de la función
test('Prueba de aprobación de préstamo', () => {
    // Prueba 1: Edad menor al mínimo y ingreso válido
    expect(esAprobadoParaPrestamo(17, 10001)).toBe("Rechazado");

    // Prueba 2: Edad dentro del rango y ingreso válido
    expect(esAprobadoParaPrestamo(18, 10001)).toBe("Aprobado");

    // Prueba 3: Edad dentro del rango pero ingreso fuera del límite superior
    expect(esAprobadoParaPrestamo(65, 100001)).toBe("Rechazado");

    // Prueba 4: Edad mayor al máximo permitido y ingreso válido
    expect(esAprobadoParaPrestamo(66, 10000)).toBe("Rechazado");

    // Prueba 5: Edad dentro del rango y ingreso dentro del rango permitido
    expect(esAprobadoParaPrestamo(30, 15000)).toBe("Aprobado");

    // Prueba 6: Edad dentro del rango y ingreso menor al mínimo requerido
    expect(esAprobadoParaPrestamo(30, 9999)).toBe("Rechazado");

    // Prueba 7: Edad menor al mínimo y ingreso menor al mínimo requerido
    expect(esAprobadoParaPrestamo(17, 9999)).toBe("Rechazado");
});
