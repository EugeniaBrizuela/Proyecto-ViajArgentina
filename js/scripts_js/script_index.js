
// BIENVENIDA A SITIO WEB
//Llamo al input
let home = document.getElementById("home");
let inputWelcome = document.getElementById ("inputWelcome");

//Url de data.json para usar API-Fetch
const url = "./js/data/data_paquetes.json"; 

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

        Toastify({
            text: "Gracias por visitar nuestra página!",
            className: "main__button3",
            backgroundColor: "#7C6A0A",
            color: "#5A5A5A",
            gravity: "top",
            position: "left",
            duration: 2000,
        }).showToast();
        
    }
});

//Se colocan mensajes con toastify de ingresar y registrar
Toastify({
    text: "Ingresar",
    className: "main__button3",
    backgroundColor: "#7C6A0A",
    duration: 3000,
    gravity: "bottom",
    position: "left",
    destination: "./pages/suscribite.html",
  }).showToast();

Toastify({
    text: "Registrarse",
    className: "main__button3",
    backgroundColor: "#7C6A0A",
    duration: 3000,
    gravity: "bottom",
    position: "right",
    destination: "./pages/suscribite.html",
    }).showToast();


//Función para mostrar el nombre escrito en el input 
function mostrar_mensaje (){
    if (inputWelcome.value.trim() != ""){
        agrego_nombre(inputWelcome.value);
        inputWelcome.value = "";
    }else{
        Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: 'No ingresaste nada',
            showConfirmButton: false,
            timer: 2000
            });
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
    
    let timerInterval
    Swal.fire({
    title: 'Buscando tu mejor paquete',
    html: 'Mostrando en <b></b> milisegundos.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('')
    }
    });

})

//Función para validar datos ingresados en inputs
function validar_datos(){
    
    avisosValidacion.innerHTML = "";
    
    let inputLocalidad = document.getElementById ("localidad").value.toUpperCase();
    let inputInteres = document.getElementById("interes").value.toUpperCase();
    let inputTemporada = document.getElementById("temporada").value.toUpperCase();
    
    let arreglo_msj = new Array();

    inputLocalidad == "" && arreglo_msj.push("La localidad ingresada no es correcta, debe ingresar la opción entre Bariloche o El Bolson");

    inputInteres == "" && arreglo_msj.push("El interés ingresado no es correcto, debe ingresar naturaleza o ciudad");

    inputTemporada == "" && arreglo_msj.push("La temporada no coincide con lo que debe ser ingresado, debe ingresarse verano o invierno");
    
    setTimeout(() => {
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
            
        }else{

            //Se llama a API local con fetch
            fetch(url)
            .then(response => response.json())
            .then((data) =>{
                console.log(data);
                const resultado1 = data.paquete.filter((prop)=> 
                    prop.localidad == inputLocalidad && prop.temporada == inputTemporada && prop.interes == inputInteres);
        
                resultado1 ? resultado1.forEach ((paquete) => crear_caja_paquete(paquete)) : alert("No se encuentran coincidencias");
        
            });
            btn_buscar.remove();

            //Se agrega asincronía
            setInterval(()=>{
                Toastify({
                    text: "Si te gustó el paquete y querés más información, clickea acá",
                    className: "main__button3",
                    backgroundColor: "#7C6A0A",
                    duration: 6000,
                    gravity: "top",
                    position: "right",
                    destination: "https://www.facebook.com/",
                }).showToast();   

            },5000);
        }
        
    }, 2000);

    //Resetean los valores de inputs
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

    let timerInterval
    Swal.fire({
    title: 'Cargando paquetes',
    html: 'Mostrando en <b></b> milisegundos.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('')
    }
    })
    
    //Se agrega API local con fetch - Se usa asincronía
    setTimeout(()=>{
        fetch(url)
          .then ((response)=> response.json())
          .then((data)=>{
            console.log(data);
            data.paquete.forEach((paquete) => crear_caja_paquete(paquete))
          });
    
        setInterval(()=>{
            Toastify({
                text: "Si querés más información, clickea acá",
                className: "main__button3",
                backgroundColor: "#7C6A0A",
                duration: 6000,
                gravity: "top",
                position: "left",
                destination: "https://www.facebook.com/",
            }).showToast();   
    
        },5000);

    },2000);

    return true;
}

//Función para crear las cajas de los paquetes
function crear_caja_paquete (paquete){

    //Se crean nuevos elementos con DOM
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
    descripcion.textContent = "Descripción del paquete: \n\n" + "Localidad: " + paquete.localidad + "\nTemporada: " + paquete.temporada + "\nEstadía: " + paquete.estadia + "\nViaje: " + paquete.viaje + "\nActividad: " + paquete.actividad;
    descripcion.style.fontSize = "22px";
    descripcion.style.margin = "25px";
    descripcion.style.color = "#5A5A5A";
    descripcion.style.textAlign = "center";
    
    let precio = document.createElement ("p");
    precio.textContent = "Descripción del presupuesto: \n\n" + "Presupuesto: \n-Estadía: $" + paquete.precioEstadia + "\n-Viaje: $" + paquete.precioViaje + "\n-Actividad: $" + paquete.precioActividad + "\nTOTAL (x persona x día)= $" + (paquete.precioEstadia + paquete.precioViaje + paquete.precioActividad);
    precio.style.fontSize = "22px";
    precio.style.margin = "25px";
    precio.style.color = "#5A5A5A";
    precio.style.textAlign = "center";
    
    let img = document.createElement ("img");
    img.setAttribute("src", paquete.image);
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
    
    //Se agrega evento de mouse 
    ctn.addEventListener("mouseover", ()=>{
        ctn.style.backgroundColor = "#deff6779";
    });

    ctn.addEventListener("mouseout", ()=>{
        ctn.style.backgroundColor = "#E7F9A9";
    })
}
