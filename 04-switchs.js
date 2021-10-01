/* Switch
    Estructura de control de flujo, nos ayuda a tomar deciciones
    mediante la evaluacion de una condicion.
    (Tipo if)
*/

const edad = parseInt(prompt("Ingresa tu edad"));
let mesaje = "";

if (edad === 18) {
    mensaje ="Acaba de cumplir la myoria de edad.";
}

switch (edad) {
    case 18:
        mensaje = "Acaba de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera del rango de edad"
        break;
}

document.write(`<p>${mensaje}</p>`);