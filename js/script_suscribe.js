
//BOTONES PARA INGRESAR Y REGISTRARSE
//Llamo a botones y cambio el color de fondo
let btn_ingresar = document.getElementById("btn_ingresar");
let btn_registrar = document.getElementById("btn_registrar");
btn_ingresar.style.backgroundColor = "#deff6779";
btn_registrar.style.backgroundColor = "#deff6779";

//Llamo a etiquetas de los formularios y cambio los estilos
let formIngreso = document.getElementById("formingreso");
let ingreso = document.getElementById("ingreso");
ingreso.style.backgroundColor = "#E7F9A9";
ingreso.style.backgroundSize = "cover";
ingreso.style.paddingTop= "20px";
ingreso.style.paddingBottom = "20px"
ingreso.style.borderStyle = "solid";
ingreso.style.borderColor = "#7C6A0A";
ingreso.style.borderWidth = "2px";

let formRegistro = document.getElementById("formregistro");
let registro = document.getElementById("registro");
registro.style.backgroundColor = "#E7F9A9";
registro.style.backgroundSize = "cover";
registro.style.paddingTop= "20px";
registro.style.paddingBottom = "20px";
registro.style.borderStyle = "solid";
registro.style.borderColor= "#7C6A0A";
registro.style.borderWidth = "2px";


//INGRESO
//Agrego evento de click y funcionalidad
let btn_ingreso = document.getElementById("btn_ingreso");
let btn_registro = document.getElementById("btn_registro");
let avisosValidacion2 = document.getElementById("avisosValidacion2");

btn_ingreso.addEventListener("click", ()=>{

    buscar_usuario();

})

//REGISTRO
//Agrego evento de click y funcionalidad
btn_registro.addEventListener("click", ()=>{
   
    validar_datos2();

})

// Función para buscar al usuario ingresado en formularios
function buscar_usuario (){

    let inputUsuario = document.getElementById("usuario").value;
    let inputContraseña = document.getElementById("contraseña").value;

    // Corroboro que esté vacío el array
    !localStorage.getItem("array_usuario") && false;

    // Parseo los valores del array para trabajar con los objetos
    let usuario_almacenado = JSON.parse(localStorage.getItem("array_usuario"));
    
    let usuariosEncontrados = false;
    
    let i = 0;
    // Genero un bucle para obtener el dato de usuariosEncontrados 
    while ((!usuariosEncontrados) && (i != usuario_almacenado.length)){

        if (usuario_almacenado[i].usuario === inputUsuario ){

            usuariosEncontrados = usuario_almacenado[i];
        }

        i++
    }

    //Reseteo los input
    inputUsuario.value = "";
    inputContraseña.value = "";

    //Segun el valor obtenido muestro uno u otro mensaje si esta regustrado o no el usuario
    if (usuariosEncontrados != false){
        let msj1 = document.getElementById("msjError1");
        msj1.textContent = "Bienvenido/a " + inputUsuario + "!!";
        msj1.style.fontSize = "30px";
        msj1.style.color = "#404040";
        msj1.style.textAlign = "center";

    }else{
        let msj2 = document.getElementById("msjError2");
        msj2.textContent = "El usuario no existe";
        msj2.style.fontSize = "30px";
        msj2.style.color = "#404040";
        msj2.style.textAlign = "center";
    }

    return usuariosEncontrados;

}


// Función para validar los datos ingresados en el formulario de registro
function validar_datos2 (){
    
    let msj = "";
    
    let inputNuevoUsuario = document.getElementById("nuevo_usuario").value;
    let inputNuevoNombre = document.getElementById("nuevo_nombre").value;
    let inputNuevoApellido = document.getElementById("nuevo_apellido").value;
    let inputNuevaContraseña = document.getElementById("nueva_contraseña").value;


    if ((inputNuevoUsuario != "") && (inputNuevoNombre != "") && (inputNuevoApellido != "") && (inputNuevaContraseña != "")){

        let dato_usuario = buscar_usuario();

        // Se ve si esta ya registrado o no
        if (dato_usuario != false){

            msj = "El usuario ingresado ya existe"
        }

    }else {

        msj = "Los datos ingresados son erroneos, se deben ingresar todos los datos"
    }
    
    // Se emplea un condicional para guardar un nuevo usuario o se muestra el mensaje correspondiente
    if (msj == ""){
        
        let nuevo_usuario = new Usuario (inputNuevoUsuario, inputNuevoNombre, inputNuevoApellido, inputNuevaContraseña);
        guardar_usuario (nuevo_usuario);

        let msj_exitoso = document.getElementById("msjError3");
        msj_exitoso.textContent = "El usuario " + inputNuevoUsuario + " se ha creado con éxito!";
        msj_exitoso.style.fontSize = "30px";
        msj_exitoso.style.color = "#404040";
        msj_exitoso.style.textAlign= "center";
        let msj2 = document.getElementById("msjError2");
        msj2.remove();
        
    }else{

        let msj_no_exitoso = document.getElementById("msjError4");
        msj_no_exitoso.textContent = msj;
        msj_no_exitoso.style.fontSize = "30px";
        msj_no_exitoso.style.color = "#404040";
        msj_no_exitoso.style.textAlign= "center";
        
    }
    
    //Reseteo los valores de los input
    inputNuevoUsuario.value = "";
    inputNuevoNombre.value = "";
    inputNuevoApellido.value = "";
    inputNuevaContraseña.value = "";

    return msj;

    
} 

// Función para guardar a un nuevo usuario en el LocalStorage
function guardar_usuario(nuevo_usuario){

    let usuario_almacenado = localStorage.getItem("array_usuario");


    if (usuario_almacenado != null){

        let array = JSON.parse (usuario_almacenado);
        array_usuario.push(nuevo_usuario);
        
        localStorage.setItem("array_usuario", JSON.stringify(array_usuario));
    
    }else{

        array_usuario.push(nuevo_usuario);
        localStorage.setItem("array_usuario", JSON.stringify(array_usuario));
    }
}