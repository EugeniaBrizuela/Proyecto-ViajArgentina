
//BOTONES PARA INGRESAR Y REGISTRARSE
//Llamo a botones y cambio el color de fondo
let btn_ingresar = document.getElementById("btn_ingresar");
let btn_registrar = document.getElementById("btn_registrar");
btn_ingresar.style.backgroundColor = "#deff6779";
btn_registrar.style.backgroundColor = "#deff6779";

//Llamo a etiqueta formularios y cambio los estilos
let formIngreso = document.getElementById("formingreso");
formIngreso.style.backgroundColor = "#E7F9A9";
formIngreso.style.backgroundSize = "cover";
formIngreso.style.paddingTop= "20px";
formIngreso.style.paddingBottom = "20px"
formIngreso.style.borderStyle = "solid";
formIngreso.style.borderColor = "#7C6A0A";
formIngreso.style.borderWidth = "2px";

let formRegistro = document.getElementById("formregistro");
formRegistro.style.backgroundColor = "#E7F9A9";
formRegistro.style.backgroundSize = "cover";
formRegistro.style.paddingTop= "20px";
formRegistro.style.paddingBottom = "20px";
formRegistro.style.borderStyle = "solid";
formRegistro.style.borderColor= "#7C6A0A";
formRegistro.style.borderWidth = "2px";


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


function buscar_usuario (){

    let inputUsuario = document.getElementById("usuario").value;
    let inputContraseña = document.getElementById("contraseña").value;

    if (!localStorage.getItem("array_usuario")){

        return false;
        
         
    }

    let usuario_almacenado = JSON.parse(localStorage.getItem("array_usuario"));
    let usuariosEncontrados = false;

    let i = 0;

    while ((!usuariosEncontrados) && (i != usuario_almacenado.length)){

        if (usuario_almacenado[i].usuario === inputUsuario ){

            usuariosEncontrados = usuario_almacenado[i];
        }

        i++
    }

    inputUsuario.value = "";
    inputContraseña.value = "";

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

function validar_datos2 (){
    
    let msj = "";
    
    let inputNuevoUsuario = document.getElementById("nuevo_usuario").value;
    let inputNuevoNombre = document.getElementById("nuevo_nombre").value;
    let inputNuevoApellido = document.getElementById("nuevo_apellido").value;
    let inputNuevaContraseña = document.getElementById("nueva_contraseña").value;


    if ((inputNuevoUsuario != "") && (inputNuevoNombre != "") && (inputNuevoApellido != "") && (inputNuevaContraseña != "")){

        let dato_usuario = buscar_usuario();
        
        if (dato_usuario != false){

            msj = "El usuario ingresado ya existe"
        }

    }else {

        msj = "Los datos ingresados son erroneos, se deben ingresar todos los datos"
    }

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

    inputNuevoUsuario.value = "";
    inputNuevoNombre.value = "";
    inputNuevoApellido.value = "";
    inputNuevaContraseña.value = "";

    return msj;

    
} 


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

/*     if (localStorage.getItem("array_usuario")){

        let usuariosAlmacenados = JSON.parse (localStorage.getItem("listUsuarios"));
        usuariosAlmacenados.push(nuevo_usuario);

        let usuAlmacenados_string = JSON.stringify(usuariosAlmacenados);
        localStorage.setItem("listUsuarios", usuAlmacenados_string);
    
    }else{ */

       /*  let usuariosAlmacenados = new Array(); */
        /* usuariosAlmacenados.push(nuevo_usuario);
        let usuAlmacenados_string = JSON.stringify(usuariosAlmacenados);
        localStorage.setItem("listUsuarios", usuAlmacenados_string);
    } */
}


/* function validar_datos2 (){

    avisosValidacion2.innerHTML = "";

    let inputNuevoUsuario = document.getElementById("nuevo_usuario").value;
    let inputNuevoNombre = document.getElementById("nuevo_nombre").value;
    let inputNuevoApellido = document.getElementById("nuevo_apellido").value;
    let inputNuevaContraseña = document.getElementById("nueva_contraseña").value;
        
    let arreglo_msj_registro = new Array();
    
    if (inputNuevoUsuario == ""){
        
        arreglo_msj_registro.push ("No has ingresado un nombre de usuario, debe ingresar al menos un caracter");

    }else{

        let busqueda = buscar_usuario();

        if(busqueda != false){

            arreglo_msj_registro.push("Ya existe el usuario");
        }
    }

    if (inputNuevoNombre == ""){

        arreglo_msj_registro.push ("No has ingresado ningún nombre");
    }

    if (inputNuevoApellido == ""){
        
        arreglo_msj_registro.push ("No has ingresado ningún apellido");
    }

    if (inputNuevaContraseña == ""){

        arreglo_msj_registro.push("No has ingresado ninguna contraseña");
    }


    if (arreglo_msj_registro.length > 0){

        let listaAvisosRegistro = document.createElement("div");
        listaAvisosRegistro.textContent = "Los siguientes puntos deben corregirse: ";
        listaAvisosRegistro.style.fontSize = "20px";
        listaAvisosRegistro.style.textAlign = "center";
        listaAvisosRegistro.style.color = "#404040";

        arreglo_msj_registro.forEach((msj) =>{
            listaAvisosRegistro.appendChild(crear_msj(msj))
        })
    
        avisosValidacion2.appendChild(listaAvisosRegistro);
    }


    inputNuevoUsuario.value = "";
    inputNuevoNombre.value = "";
    inputNuevoApellido.value = "";
    inputNuevaContraseña.value = "";

    return arreglo_msj_registro.lenght == 0;


}    

function crear_msj(msj){
    let item_msj = document.createElement("li");
    item_msj.textContent = msj;

    return item_msj;
}
 */