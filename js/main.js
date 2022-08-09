//Datos de entrada 
let nombre = prompt("Ingrese su nombre"). toUpperCase ();

while (nombre != "ESC"){
    switch(nombre){
        case "ADRIANA":
            alert("Bienvenida Adriana");
            for (let i = 1 ; i<2; i++) {
                alert( nombre + "Cuentas con beneficio de turno, turno Nº" + i );
            }
            break;
        case "SEBASTIAN":
            alert("Bienvenido Sebastian");
            for (let i = 1 ; i<2; i++) {
                alert( nombre + "Cuentas con beneficio de turno, turno Nº" + i );
            }
            break;
        default:
            alert("Bienvenido desconocido");
            for (let i = 1 ; i<15; i++) {
                alert("Turno Nº: " + i + " - Nombre: " + Nombre);
            }
            break;
    }
        if ((nombre == "ADRIANA") || (nombre == "SEBASTIAN")) {
            console.log("Salgo se la ejecuación del while");
            break;
            
        }
    nombre = prompt("Ingrese un nombre"). toUpperCase();
}
