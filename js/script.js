/* PROYECTO VIAJARGENTINA 
Es una página que se basa en las interacción con el usuario para conocer la Argentina. Es una página turística/informativa. 
-Se solicita al usuario: nombre, apellido, edad, si desea viajar con su familia o si tiene, cuantos niños tiene, interés del viaje 
(Viaje para hacer caminatas, concer naturaleza, visitar lugares en ciudades, si es un retiro espiritual).  
- Se puede suscribir para lo cual se llena un formulario y con ello obtendría beneficios (nombre apellido, contraseña).
*/

/* PRIMER DESAFIO: SIMULADOR 
Se hará que el usuario ingrese adonde está interesado en ir, luego coloque sobre el/ella o de si va acompañada(pedir numero de integrantes)
, preguntar el motivo del viaje, intereses y finalmente que se de la respuesta de cómo llegar (avion-colectivo-auto), posibles hospedajes-restaurantes, 
y según los intereses se indica que se puede hacer. 
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
    
// Funcion para solicitar datos para dar posibles lugares a visitar (primeras opciones de Bariloche o El Bolsón//

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
    }else{
       
        alert ("Has ingresa los datos erróneamente.")

    }
}



// Función para pedir datos //

function datos_usuario(){
    
    let nombre = prompt("Ingrese el nombre del o la integrante");
    let apellido = prompt("Ingrese el apellido del o la integrante");
    let edad = parseInt(prompt ("Ingrese la edad del o la integrante"));

    if (nombre != "" && apellido != "" && (edad != "" && edad > 0 && edad < 90)){

       let msj2 = confirm ("Los siguientes datos ingresados son correctos? 1)Nombre: " + nombre.toUpperCase + "\n" + "2)Apellido: " + apellido.toUpperCase + "\n" + "3)Edad: " + edad);
    }else{
        alert("Los datos ingresados no son correctos.");
    }
}









