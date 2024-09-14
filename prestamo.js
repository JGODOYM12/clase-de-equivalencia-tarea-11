// prestamo.js
function esAprobadoParaPrestamo(edad, ingreso) {
    if (edad >= 18 && edad <= 65 && ingreso > 10000 && ingreso <= 100000) {
        return "Aprobado";
    } else {
        return "Rechazado";
    }
}

module.exports = { esAprobadoParaPrestamo };
