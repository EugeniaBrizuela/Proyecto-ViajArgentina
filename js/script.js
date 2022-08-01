/* PROYECTO VIAJARGENTINA 
Es una página que se basa en las interacción con el usuario para conocer la Argentina. Es una página turística/informativa. 
Se puede suscribir para lo cual se llena un formulario y con ello obtendría beneficios (nombre apellido, contraseña).
*/

// Bienvenida a la página //
 
function bienvenida (nombre){

    if (nombre != ""){
        
        alert ("BIENVENIDO/A " + nombre + " A VIAJARGENTINA");
    
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

    let nombre = prompt("Ingrese su nombre").toUpperCase();
    
    bienvenida(nombre);

}
    
// Funcion para solicitar datos para dar posibles lugares a visitar (primeras opciones de Bariloche o El Bolsón)

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

// Código para solicitar localidad y dar presupuestos

let msj2 = confirm("¿Quieres conocer Argentina?");

while (msj2 == false){

    msj2 = confirm("Me parece que has errado en tu respuesta.\n Volvemos a preguntarte: ¿Quieres conocer Argentina?");
}

if (msj2){

    let localidad = prompt ("¿Qué lugar quiere/n conocer? Bariloche ó El Bolsón").toUpperCase();
    let interes = prompt ("¿Qué prefiere/n: naturaleza ó ciudad?").toUpperCase();
    let temporada = prompt ("¿Qué temporada prefiere/n: invierno ó verano?").toUpperCase();
    solicitud_lugar(localidad, interes, temporada);

    if ((localidad != "" && (localidad == "BARILOCHE" || localidad == "EL BOLSON")) && (interes != "" && (interes == "NATURALEZA" || interes == "CIUDAD")) && (localidad != "" && (temporada == "INVIERNO" || temporada == "VERANO"))){
        alert ("HAS ESCOGIDO VIAJAR A " + localidad + " PARA CONOCER LA " + interes + " EN TEMPORADA DE " + temporada + " .");
        if (localidad == "BARILOCHE" && interes == "NATURALEZA" && temporada == "INVIERNO"){
            alert (paquete1.descripcionPaquete());
            alert (paquete1.precioPaquete());
        }else if (localidad == "BARILOCHE" && interes == "NATURALEZA" && temporada == "VERANO"){
            alert (paquete3.descripcionPaquete());
            alert (paquete3.precioPaquete());
        }else if (localidad == "BARILOCHE" && interes == "CIUDAD" && temporada == "INVIERNO"){
            alert (paquete2.descripcionPaquete());
            alert (paquete2.precioPaquete());
        }else if (localidad == "BARILOCHE" && interes == "CIUDAD" && temporada == "VERANO"){
            alert (paquete4.descripcionPaquete());
            alert (paquete4.precioPaquete());
        }else if (localidad == "EL BOLSON" && interes == "NATURALEZA" && temporada == "INVIERNO"){
            alert (paquete5.descripcionPaquete());
            alert (paquete5.precioPaquete());
        }else if (localidad == "EL BOLSON" && interes == "NATURALEZA" && temporada == "VERANO"){
            alert (paquete7.descripcionPaquete());
            alert (paquete7.precioPaquete());
        }else if (localidad == "EL BOLSON" && interes == "CIUDAD" && temporada == "INVIERNO"){
            alert (paquete6.descripcionPaquete());
            alert (paquete6.precioPaquete());
        }else if (localidad == "EL BOLSON" && interes == "CIUDAD" && temporada == "VERANO"){
            alert (paquete8.descripcionPaquete());
            alert (paquete8.precioPaquete());
        }
    }else{

        alert ("Has ingresa los datos erróneamente.")

    }
} 

// Arreglo de objetos de ciudades

const arreglo_nombre = ["Chubut--Puerto Madryn: Esta ciudad es de gran interés turistico por el hermoso paisaje del mar y la visita de las ballenas", "Neuquén--Caviahue-Copahue: Estas ciudades se encuentras cercanas y son especiales para pasear y dirigirse a complejos de aguas calientes", "Río Negro--Viedma: Esta ciudad es la capital de la provincia y tiene un balneario a pocos km para disfrutarlo", "Santa Cruz--El Calafate: Esta ciudad puede ser disfrutada en familia", "Tierra del Fuego--Usuahia: Esta ciudad es la más austral del mundo, en donde se puede apreciar la naturaleza"]

let msj3 = confirm ("Ahora que conocés nuetsra página, ¿quieres conocer otras posibilidades?");

if (msj3){
    
    alert("Te mostramos que otras posibilidades tenés para conocer de la Patagonia\n\n" + arreglo_nombre.join ("\n\n"));

}else{
    alert("Que lástima, será la próxima");
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








