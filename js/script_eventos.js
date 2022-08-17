
// BIENVENIDA A SITIO WEB
//Llamo al input
let home = document.getElementById("home");
let inputWelcome = document.getElementById ("inputWelcome");

//Cambio los estilos de caja del input
inputWelcome.style.backgroundColor = "#deff6779";
inputWelcome.style.borderColor = "#7C6A0A";
inputWelcome.style.borderBlockStyle = "solid";
inputWelcome.style.borderWidth = "2px";
inputWelcome.style.padding = "10px";
inputWelcome.style.fontSize = "25px";
inputWelcome.style.fontFamily = "'Poiret One', cursiva",
inputWelcome.style.fontWeight = "bold";
inputWelcome.style.color = "#292929";
inputWelcome.style.textAlign = "center";
inputWelcome.style.marginTop = "110px";
inputWelcome.style.marginLeft = "600px";
inputWelcome.style.marginRight = "450px";

//Agrego evento del input
inputWelcome.addEventListener ("click", ()=>{
    inputWelcome.classList.toggle("borderColor");
})

//Asocio el input al home
home.appendChild(inputWelcome);

//Llamo a etiqueta texto
let texto = document.querySelector("section h1");

//Agrego evento de enter
inputWelcome.addEventListener("keyup", event => {
    if (event.which === 13 || event.keyCode === 13){
        mostrar_mensaje();
    }
});

//Función para mostrar el nombre escrito en el input 
function mostrar_mensaje (){
    if (inputWelcome.value.trim() != ""){
        agrego_nombre(inputWelcome.value);
        inputWelcome.value = "";
    }else{
        alert ("No ingresaste nada")
    }
}

//Función para agregar al mensaje de bienvenida y eliminar el boton y muestre solo el mensaje
function agrego_nombre (nombre){
    let bienvenida = document.createElement("h2");
    bienvenida.textContent = "BIENVENIDO/A " + nombre.toUpperCase() + " A VIAJARGENTINA"; 
    bienvenida.color = "#404040";
    bienvenida.style.paddingTop = "50px"
    bienvenida.style.fontSize = "30px";
    texto.appendChild(bienvenida);
    inputWelcome.remove();
}

//Reseteo de valor
inputWelcome.value = "";

// FORMULARIO DE LOS PAQUETES 
//Doy estilo al section de paquetes de viaje

//Llamo a etiqueta de formulario
let formpaquetes = document.getElementById("formpaquetes");

//Cambio los estilos de sección
formpaquetes.style.backgroundColor = "#E7F9A9";
formpaquetes.style.backgroundSize = "cover";
formpaquetes.style.paddingTop = "20px";
formpaquetes.style.paddingBottom = "20px";
//Validaciones del formulario
//Llamo a id de avisos 
let avisosValidacion = document.getElementById ("avisosValidacion");
let btn_buscar = document.getElementById ("btn_buscar");

//Agrego evento al clickear buscar
btn_buscar.addEventListener("click", ()=>{
    validar_datos();

    if (validar_datos()){
        const resultado = arreglo_paquete.filter ((paquete)=> paquete.localidad === document.querySelector("#localidad").value && paquete.temporada === document.querySelector("#temporada").value);
        console.log (resultado)

    }
   

})

//Función para validar datos ingresados en inputs
function validar_datos(){
    
    avisosValidacion.innerHTML = "";
    
    let inputLocalidad = document.getElementById ("localidad").value;
    let inputInteres = document.getElementById("interes").value;
    let inputTemporada = document.getElementById("temporada").value;
    
    let arreglo_msj = new Array();

    if (inputLocalidad == ""){

        arreglo_msj.push("La localidad ingresada no es correcta, debe ingresar la opción entre Bariloche o El Bolson");
    }
    
    if (inputInteres == ""){
        
        arreglo_msj.push ("El interés ingresado no es correcto, debe ingresar naturaleza o ciudad");
    }
    
    if (inputTemporada == ""){
        
        arreglo_msj.push("La temporada no coincide con lo que debe ser ingresado, debe ingresar verano o invierno");
    }
    
    if (arreglo_msj.length > 0){
        
        let listaAvisos = document.createElement("div");
        listaAvisos.textContent = "Los siguientes puntos deben corregirse: ";
        listaAvisos.style.fontSize = "20px";
        listaAvisos.style.textAlign = "center";
        listaAvisos.style.color = "#404040";
        
        arreglo_msj.forEach((mensaje) =>{
            listaAvisos.appendChild(crear_lista(mensaje));
        })
        
        avisosValidacion.appendChild(listaAvisos);
        
        
    }

    inputLocalidad.value = "";
    inputInteres.value = "";
    inputTemporada.value = "";

    return arreglo_msj.lenght == 0;
    
}

//Función para crear la lista de errores
function crear_lista(mensaje){
    let item = document.createElement("li");
    item.textContent = mensaje;
    
    return item;
}

// Botón "VER TODO", para ver todos los paquetes
// Llamo a boton
let btn_ver = document.getElementById ("btn_ver");

//Agrego evento de click
btn_ver.addEventListener("click", ()=>{

    ver_paquete();
    btn_ver.remove();
})

//Llamo contenedor de paquetes
let contenedor = document.getElementById("contenedor");
contenedor.style.backgroundColor = "#E7F9A9";
contenedor.style.backgroundSize = "cover";

//Función para ver todos los paquetes
function ver_paquete(){

    for (let i = 0; i < arreglo_paquete.length; i++){
        
        let objeto_paquete = arreglo_paquete [i];
        crear_caja_paquete(objeto_paquete);
        
    }
    return true;
}

//Función para crear las cajas de los paquetes
function crear_caja_paquete (paquete){
    
    let ctn = document.createElement ("div");
    ctn.style.margin = "15px";
    ctn.style.borderStyle = "solid";
    ctn.style.borderColor = "#7C6A0A";
    ctn.style.borderWidth = "2px";
    
    let tittle = document.createElement ("h2");
    tittle.textContent = paquete.localidad;
    tittle.style.fontSize = "25px";
    tittle.style.marginTop = "10px";

    let descripcion = document.createElement ("p");
    descripcion.textContent = paquete.descripcionPaquete();
    descripcion.style.fontSize = "22px";
    descripcion.style.margin = "25px";
    descripcion.style.color = "#5A5A5A";
    descripcion.style.textAlign = "center";
    
    let precio = document.createElement ("p");
    precio.textContent = paquete.precioPaquete();
    precio.style.fontSize = "22px";
    precio.style.margin = "25px";
    precio.style.color = "#5A5A5A";
    precio.style.textAlign = "center";
    
    let img = document.createElement ("img");
    img.setAttribute("src",paquete.image);
    img.style.width = "40%";
    img.style.marginLeft = "450px"; 
    img.style.borderColor = "#7C6A0A";
    img.style.borderStyle = "solid";
    img.style.borderWidth = "2px";
    
    ctn.appendChild(tittle);
    ctn.appendChild(descripcion);
    ctn.appendChild(precio);
    ctn.appendChild(img);
    contenedor.appendChild(ctn);

    ctn.addEventListener("mouseover", ()=>{
        ctn.style.backgroundColor = "#deff6779";
    });

    ctn.addEventListener("mouseout", ()=>{
        ctn.style.backgroundColor = "#E7F9A9";
    })
}

//Función para mostrar paquete que se desea según la localidad-interés-temporada
/* 
function mostrar_paquete(){
    let resultado = arreglo_paquete.filter ((paquete)=> paquete.localidad === document.getElementById("localidad").value);
} */

//Obtener la opción elegida según la localidad-interes-temporada y llamar a la funcion crear_caja_paquete-SE HARÁ CUANDO SE HAGA DESAFÍO DE STORAGE
/* function mostrar_paquete(inputLocalidad, inputInteres, inputTemporada){

    if (inputLocalidad == "BARILOCHE" && inputInteres == "NATURALEZA" && inputTemporada == "INVIERNO"){
        alert (paquete1.descripcionPaquete() + "\n\n" + paquete1.precioPaquete());
    }else if (inputLocalidad == "BARILOCHE" && inputInteres == "NATURALEZA" && inputTemporada == "VERANO"){
        alert (paquete3.descripcionPaquete() + "\n\n" + paquete3.precioPaquete());
    }else if (inputLocalidad == "BARILOCHE" && inputInteres == "CIUDAD" && inputTemporada == "INVIERNO"){
        alert (paquete2.descripcionPaquete() + "\n\n" + paquete2.precioPaquete());
    }else if (inputLocalidad == "BARILOCHE" && inputInteres == "CIUDAD" && inputTemporada == "VERANO"){
        alert (paquete4.descripcionPaquete() + "\n\n" + paquete4.precioPaquete());
    }else if (inputLocalidad == "EL BOLSON" && inputInteres == "NATURALEZA" && inputTemporada == "INVIERNO"){
        alert (paquete5.descripcionPaquete() + "\n\n" + paquete5.precioPaquete());
    }else if (inputLocalidad == "EL BOLSON" && inputInteres == "NATURALEZA" && inputTemporada == "VERANO"){
        alert (paquete7.descripcionPaquete() + "\n\n" + paquete7.precioPaquete());
    }else if (inputLocalidad == "EL BOLSON" && inputInteres == "CIUDAD" && inputTemporada == "INVIERNO"){
        alert (paquete6.descripcionPaquete() + "\n\n" + paquete6.precioPaquete());
    }else if (inputLocalidad == "EL BOLSON" && inputInteres == "CIUDAD" && inputTemporada == "VERANO"){
        alert (paquete8.descripcionPaquete() + "\n\n" + paquete8.precioPaquete());
    }

} */

