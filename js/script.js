/* PROYECTO VIAJARGENTINA 
Es una página que se basa en las interacción con el usuario para conocer la Argentina. Es una página turística/informativa. 
Se puede suscribir para lo cual se llena un formulario y con ello obtendría beneficios (nombre apellido, contraseña).
*/

// Bienvenida a la página //
 
function bienvenida (nombre, apellido){

    if (nombre != "" && apellido != ""){
        
        alert ("Bienvenido/a " + nombre + " " + apellido + " a ViajArgentina");
    
    }else{
        
        alert("Los datos ingresados no son correctos.");
        
    }        
}

let msj = confirm("¿Desea visitar nuestra página?");

while (msj == false){

    alert("Qué lástima");
    msj = confirm("Vuelve a pensarlo, no quieres visitar nuestra página?");

}

if (msj){ 

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido");
    
    bienvenida(nombre, apellido);

}
    
// Funcion para solicitar datos para dar posibles lugares a visitar (primeras opciones de Bariloche o El Bolsón)//

function solicitud_lugar(localidad, interes, temporada){

    switch (localidad){
        case "BARILOCHE":
            console.log("Has seleccionado Bariloche");
            break;
        case "EL BOLSON":
            console.log("Has seleccionado El Bolsón");
            break;
        case "":
            console.log("No has ingresado nada");
            break;
        default:
            alert("La opción localidad ingresada no es válida");
    }    

    switch (interes){
        case "NATURALEZA":
            console.log("Has seleccionado naturaleza");
            break;
        case "CIUDAD":
            console.log("Has seleccionado ciudad");
            break;
        case "":
            console.log("No has ingresado nada");
            break;
        default:
            alert("La opción interes ingresada no es válida");
    } 

    switch (temporada){
        case "INVIERNO":
            console.log("Has seleccionado invierno");
            break;
        case "VERANO":
            console.log("Has seleccionado verano");
            break;
        case "":
            console.log("No has ingresado nada");
            break;
        default:
            alert("La opción temporada ingresada no es válida");
    }

    return localidad, interes, temporada;

}

//Presupuestos

const estadiaBar = 15000;
const viajeBar = 20000;
const actividadBarInv = 50000; // Actividad de esqui para naturaleza-invierno
const actividadBarInv2 = 40000; // Actividad de spa para ciudad-invierno
const actividadBarVer = 20000; // Actividad de barco para naturaleza-verano
const actividadBarVer2 = 25000; // Actividad de complejo verano para ciudad-verano

const estadiaBol = 10000; 
const viajeBol = 20000;
const actividadBolInv = 60000; // Actividad de snowboard cerca para naturaleza-invierno
const actividadBolInv2 = 50000; // Actividad de complejo spa cerca para ciudad-invierno
const actividadBolVer = 15000; // Actividad de refugios para naturaleza-verano
const actividadBolVer2 = 15000; // Actividad de tour para ciudad-verano


// Funciones de presupuestos

function presupuestoBarilocheInv (estadiaBar, viajeBar, actividadBarInv){

    return "Presupuesto:\n-Estadía= $" + estadiaBar + "\n-Viaje a Bariloche= $" + viajeBar + "\n-Actividad invierno (Esquí)= $" + actividadBarInv + "\nTOTAL (x persona x día)= $" +  (estadiaBar + viajeBar + actividadBarInv);
}

function presupuestoBarilocheInv2 (estadiaBar, viajeBar, actividadBarInv2){

    return "Presupuesto:\n-Estadía= $" + estadiaBar + "\n-Viaje a Bariloche= $" + viajeBar + "\n-Actividad invierno (Spa)= $" + actividadBarInv2 + "\nTOTAL (x persona x día)= $" +  (estadiaBar + viajeBar + actividadBarInv2);
}

function presupuestoBarilocheVer (estadiaBar, viajeBar, actividadBarVer){

    return "Presupuesto:\n-Estadía= $" + estadiaBar + "\n-Viaje a Bariloche= $" + viajeBar + "\n-Actividad invierno (Paseo en barco)= $" + actividadBarVer + "\nTOTAL (x persona x día)= $" +  (estadiaBar + viajeBar + actividadBarVer);
}

function presupuestoBarilocheVer2 (estadiaBar, viajeBar, actividadBarVer2){

    return "Presupuesto:\n-Estadía= $" + estadiaBar + "\n-Viaje a Bariloche= $" + viajeBar + "\n-Actividad invierno (Complejo verano)= $" + actividadBarVer2 + "\nTOTAL (x persona x día)= $" +  (estadiaBar + viajeBar + actividadBarVer2);
}

function presupuestoBolsonInv (estadiaBol, viajeBol, actividadBolInv){

    return "Presupuesto:\n-Estadía= $" + estadiaBol + "\n-Viaje a Bariloche= $" + viajeBol + "\n-Actividad invierno (snowboard cerca)= $" + actividadBolInv + "\nTOTAL (x persona x día)= $" +  (estadiaBol + viajeBol + actividadBolInv);
}

function presupuestoBolsonVer (estadiaBol, viajeBol, actividadBolVer){

    return "Presupuesto:\n-Estadía= $" + estadiaBol + "\n-Viaje a Bariloche= $" + viajeBol + "\n-Actividad invierno (Refugios)= $" + actividadBolVer + "\nTOTAL (x persona x día)= $" +  (estadiaBol + viajeBol + actividadBolVer);
}

function presupuestoBolsonInv2 (estadiaBol, viajeBol, actividadBolInv2){

    return "Presupuesto:\n-Estadía= $" + estadiaBol + "\n-Viaje a Bariloche= $" + viajeBol + "\n-Actividad invierno (complejo spa)= $" + actividadBolInv2 + "\nTOTAL (x persona x día)= $" +  (estadiaBol + viajeBol + actividadBolInv2);
}

function presupuestoBolsonVer2 (estadiaBol, viajeBol, actividadBolVer2){

    return "Presupuesto:\n-Estadía= $" + estadiaBol + "\n-Viaje a Bariloche= $" + viajeBol + "\n-Actividad invierno (tour)= $" + actividadBolVer2 + "\nTOTAL (x persona x día)= $" +  (estadiaBol + viajeBol + actividadBolVer2);
}

// Código para solicitar localidad y dar presupuestos

let msj2 = confirm("¿Quieres conocer Argentina?");

while (msj2 == false){

    msj2 = confirm("Me parece que has errado en tu respuesta.\n Volvemos a preguntarte: ¿Quieres conocer Argentina?");
}

if (msj2){

    let localidad = prompt ("¿Qué lugar quiere/n conocer? BARILOCHE ó EL BOLSON");
    let interes = prompt ("¿Qué prefiere/n: NATURALEZA ó CIUDAD?");
    let temporada = prompt ("¿Qué temporada prefiere/n: INVIERNO ó VERANO?");
    solicitud_lugar(localidad, interes, temporada);

    if ((localidad != "" && (localidad == "BARILOCHE" || localidad == "EL BOLSON")) && (interes != "" && (interes == "NATURALEZA" || interes == "CIUDAD")) && (localidad != "" && (temporada == "INVIERNO" || temporada == "VERANO"))){
        alert ("HAS ESCOGIDO VIAJAR A " + localidad + " PARA CONOCER LA " + interes + " EN TEMPORADA DE " + temporada + " .");
        if (localidad == "BARILOCHE" && interes == "NATURALEZA" && temporada == "INVIERNO"){
            alert (presupuestoBarilocheInv(estadiaBar, viajeBar, actividadBarInv));
        }else if (localidad == "BARILOCHE" && interes == "NATURALEZA" && temporada == "VERANO"){
            alert (presupuestoBarilocheVer(estadiaBar, viajeBar, actividadBarVer));
        }else if (localidad == "BARILOCHE" && interes == "CIUDAD" && temporada == "INVIERNO"){
            alert (presupuestoBarilocheInv2(estadiaBar, viajeBar, actividadBarInv2));
        }else if (localidad == "BARILOCHE" && interes == "CIUDAD" && temporada == "VERANO"){
            alert (presupuestoBarilocheVer2(estadiaBar, viajeBar, actividadBarVer2));
        }else if (localidad == "EL BOLSON" && interes == "NATURALEZA" && temporada == "INVIERNO"){
            alert (presupuestoBarilocheInv(estadiaBol, viajeBol, actividadBolInv));
        }else if (localidad == "EL BOLSON" && interes == "NATURALEZA" && temporada == "VERANO"){
            alert (presupuestoBarilocheVer(estadiaBol, viajeBol, actividadBolVer));
        }else if (localidad == "EL BOLSON" && interes == "CIUDAD" && temporada == "INVIERNO"){
            alert (presupuestoBarilocheInv2(estadiaBol, viajeBol, actividadBolInv2));
        }else if (localidad == "EL BOLSON" && interes == "CIUDAD" && temporada == "VERANO"){
            alert (presupuestoBarilocheVer2(estadiaBol, viajeBol, actividadBolVer2));
        }
    }else{

        alert ("Has ingresa los datos erróneamente.")

    }
}

// Función para pedir datos //

/* function datos_usuario(){
    
    let nombre = prompt("Ingrese el nombre del o la integrante");
    let apellido = prompt("Ingrese el apellido del o la integrante");
    let edad = parseInt(prompt ("Ingrese la edad del o la integrante"));

    if (nombre != "" && apellido != "" && (edad != "" && edad > 0 && edad < 90)){

       let msj2 = confirm ("Los siguientes datos ingresados son correctos? 1)Nombre: " + nombre.toUpperCase + "\n" + "2)Apellido: " + apellido.toUpperCase + "\n" + "3)Edad: " + edad);
    }else{
        alert("Los datos ingresados no son correctos.");
    }
}
 */








