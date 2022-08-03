/* PROYECTO VIAJARGENTINA 
Es una página que se basa en las interacción con el usuario para conocer la Argentina. Es una página turística/informativa. 
Se puede suscribir para lo cual se llena un formulario y con ello obtendría beneficios (nombre apellido, contraseña).
*/

// FUNCIONES
//Función de bienvenida a la página

function bienvenida (nombre){
    
    if (nombre != ""){
        
        alert ("BIENVENIDO/A " + nombre + " A VIAJARGENTINA" + "\n" + new Date());
        
    }else{
        
        alert("Los datos ingresados no son correctos.");
        
    }        
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

//Función del presupuesto

function presupuesto (localidad, interes, temporada){

    if (localidad == "BARILOCHE" && interes == "NATURALEZA" && temporada == "INVIERNO"){
        alert (paquete1.descripcionPaquete() + "\n\n" + paquete1.precioPaquete());
    }else if (localidad == "BARILOCHE" && interes == "NATURALEZA" && temporada == "VERANO"){
        alert (paquete3.descripcionPaquete() + "\n\n" + paquete3.precioPaquete());
    }else if (localidad == "BARILOCHE" && interes == "CIUDAD" && temporada == "INVIERNO"){
        alert (paquete2.descripcionPaquete() + "\n\n" + paquete2.precioPaquete());
    }else if (localidad == "BARILOCHE" && interes == "CIUDAD" && temporada == "VERANO"){
        alert (paquete4.descripcionPaquete() + "\n\n" + paquete4.precioPaquete());
    }else if (localidad == "EL BOLSON" && interes == "NATURALEZA" && temporada == "INVIERNO"){
        alert (paquete5.descripcionPaquete() + "\n\n" + paquete5.precioPaquete());
    }else if (localidad == "EL BOLSON" && interes == "NATURALEZA" && temporada == "VERANO"){
        alert (paquete7.descripcionPaquete() + "\n\n" + paquete7.precioPaquete());
    }else if (localidad == "EL BOLSON" && interes == "CIUDAD" && temporada == "INVIERNO"){
        alert (paquete6.descripcionPaquete() + "\n\n" + paquete6.precioPaquete());
    }else if (localidad == "EL BOLSON" && interes == "CIUDAD" && temporada == "VERANO"){
        alert (paquete8.descripcionPaquete() + "\n\n" + paquete8.precioPaquete());
    }
}

//Función para iniciar sesión o registrarse

function inicio_usuario (nombre_ingresado, apellido_ingresado, contraseña_ingresada){

    if (nombre_ingresado != "" && apellido_ingresado != "" && contraseña_ingresada != ""){
        const nombre_encontrado = arreglo_usuario.find ((el)=> el.nombre_usuario == nombre_ingresado);
        const apellido_encontrado = arreglo_usuario.find ((el)=> el.apellido_usuario == apellido_ingresado);
        const contraseña_encontrada = arreglo_usuario.find ((el)=> el.contraseña == contraseña_ingresada);

        if (nombre_encontrado && apellido_encontrado && contraseña_encontrada){
            alert ("Bienvenido/a nuevamente a ViajArgentina, nos complace que estés suscripto");
        }else{
            alert("No te encuentras suscripto/a");
            let msj5 = confirm("¿Quieres suscribirte y obtener beneficios y descuentos?");
            if (msj5){
                let usuario4 = new Usuario (prompt("Ingrese un nombre"), prompt ("Ingrese un apellido"), prompt("Introduzca una contraseña"));
                arreglo_usuario.push (usuario4);
                alert("Bienvenido/a a ViajArgentina");
            }else {
                alert("Qué lástima, será la próxima");
            }
        }
    }else{
        alert("No has ingresado nada");
    }
}
 
// Bienvenida a la página 

let msj = confirm("¿Desea visitar nuestra página?");

while (msj == false){

    alert("Qué lástima");
    msj = confirm("Vuelve a pensarlo, no quieres visitar nuestra página?");

}

if (msj){ 

    let nombre = prompt("Ingrese su nombre").toUpperCase();
    
    bienvenida(nombre);

}

// Código para ver si se encuentra suscripto

let msj3 = confirm ("¿Estas suscripto en la página?");


if (msj3){
        
    let nombre_ingresado = prompt("Ingrese su nombre").toUpperCase();
    let apellido_ingresado = prompt("Ingrese su apellido").toUpperCase();
    let contraseña_ingresada = prompt("Ingrese su contraseña").toUpperCase();
    inicio_usuario(nombre_ingresado, apellido_ingresado, contraseña_ingresada);

}else{

    alert("Qué lástima será la próxima");
}
    
// Código para solicitar localidad y dar presupuestos

let msj2 = confirm("¿Quieres conocer la Patagonia Argentina?");

while (msj2 == false){

    msj2 = confirm("Me parece que has errado en tu respuesta.\n Volvemos a preguntarte: ¿Quieres conocer Argentina?");
}

if (msj2){
    
    let localidad = prompt ("¿Qué lugar quiere/n conocer?:\n1)Bariloche \n2)El Bolsón").toUpperCase();
    let interes = prompt ("¿Qué prefiere/n:\n1)Naturaleza \n2)Ciudad?").toUpperCase();
    let temporada = prompt ("¿Qué temporada prefiere/n:\n1)Invierno \n2)Verano?").toUpperCase();

    solicitud_lugar(localidad, interes, temporada);

    if ((localidad != "" && (localidad == "BARILOCHE" || localidad == "EL BOLSON")) && (interes != "" && (interes == "NATURALEZA" || interes == "CIUDAD")) && (localidad != "" && (temporada == "INVIERNO" || temporada == "VERANO"))){
        alert ("HAS ESCOGIDO VIAJAR A " + localidad + " PARA CONOCER LA " + interes + " EN TEMPORADA DE " + temporada + " .");
        presupuesto(localidad, interes, temporada);

    }else{

        alert ("Has ingresado los datos erróneamente.");

    }
}

// Código de cambio de presupuesto y las opciones disponibles para Bariloche y El Bolsón

let msj6 = confirm("¿Ahora que has escogido tus preferencias y te hemos dado un posible paquete sin descuento por ser miembro de la comunidad (Bariloche o El Bolsón), quiéres ver las posibilidades de los precios con descuentos de Bariloche y el Bolsón?");

const precioActualizado = arreglo_paquete.map((el)=>{
    return {
        id: el.id,
        localidad : el.localidad,
        provincia : el.provincia,
        estadia : el.estadia,
        precioEstadia : el.precioEstadia,
        viaje : el.viaje,
        precioViaje : el.precioViaje,
        temporada : el.temporada,
        actividad : el.actividad,
        precioActividad : el.precioActividad,
        tarjeta : el.tarjeta,
        precioTotal : el.precioTotal - 7000,
    }    
})

if (msj6){
    precioActualizado.forEach((el)=>{
        alert("Los descuentos posibles son:\n\n" +"Opción: " + el.id + "\n\nLocalidad:" + el.localidad + "\nProvincia:" + el.provincia + "\nTemporada:" + el.temporada + "\nEstadía:" + el.estadia + "\nViaje:" + el.viaje + "\nActividad:" + el.actividad + "\nTOTAL CON DESCUENTO (por persona por día): $"+ el.precioTotal);
    });
    alert("Si te han convencido alguno de estos paquetes, contactanos para hacerte miembro y obtener estos descuentos increíbles!!");

    //Con lo que se aprenda luego, se puede colocar una especie de formulario para que se envíe al administrador y que tenga los beneficios de estos descuentos.
    
}else{
    alert("Qué lástima, será la próxima");
}   

// Arreglo de objetos de ciudades

const arreglo_nombre = ["Chubut--Puerto Madryn: Esta ciudad es de gran interés turistico por el hermoso paisaje del mar y la visita de las ballenas", "Neuquén--Caviahue-Copahue: Estas ciudades se encuentras cercanas y son especiales para pasear y dirigirse a complejos de aguas calientes", "Río Negro--Viedma: Esta ciudad es la capital de la provincia y tiene un balneario a pocos km para disfrutarlo", "Santa Cruz--El Calafate: Esta ciudad puede ser disfrutada en familia", "Tierra del Fuego--Usuahia: Esta ciudad es la más austral del mundo, en donde se puede apreciar la naturaleza"];

let msj4 = confirm("Ahora que conocés nuestra página, ¿quieres saber de otras localidades para visitar en un futuro?");

if (msj4){
    
    alert("Te mostramos que otras posibilidades tenés para conocer de la Patagonia\n\n" + arreglo_nombre.join ("\n\n"));

}else{
    alert("Que lástima, será la próxima");
}    
 











