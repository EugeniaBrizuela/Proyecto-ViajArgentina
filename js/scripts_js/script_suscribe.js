
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

formIngreso.addEventListener("submit", (e)=>{
    e.preventDefault();
    buscar_usuario();
})

//REGISTRO
//Agrego evento de click y funcionalidad en formulario de registro
formRegistro.addEventListener("submit", (e)=>{
    e.preventDefault();
    validar_datos2();
})

// Función para buscar al usuario ingresado en formularios
function buscar_usuario (){

    let inputUsuario = document.getElementById("usuario").value;
    let inputContraseña = document.getElementById("contraseña").value;

    // Parseo los valores del array para trabajar con los objetos
    let usuario_almacenado = JSON.parse(localStorage.getItem("array_usuario"));

    const resultado_busqueda = array_usuario.find((usuario)=> usuario.usuario == inputUsuario && usuario.contraseña == inputContraseña);
    
    //Se utilizan librerías y asincronía
    if (resultado_busqueda != undefined && usuario_almacenado != ""){
        
        Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Bienvenido/a ' + inputUsuario + "!!",
            showConfirmButton: false,
            timer: 2000
            });
        
        setTimeout(()=>{
            let msj1 = document.getElementById("msjError1");
            msj1.textContent = "Bienvenido/a " + inputUsuario + "!!";
            msj1.style.fontSize = "30px";
            msj1.style.color = "#404040";
            msj1.style.textAlign = "center";
           
        },2000);
        
    }else{

        Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: 'El usuario no existe o debe ingresar correctamente la contraseña',
            showConfirmButton: false,
            timer: 2000
            });
        
        setTimeout(()=>{
            let msj2 = document.getElementById("msjError2");
            msj2.textContent = "El usuario no existe o debe ingresar correctamente la contraseña";
            msj2.style.fontSize = "30px";
            msj2.style.color = "#404040";
            msj2.style.textAlign = "center";
        },2000);
    }

    //Reseteo los input
    inputUsuario.value = "";
    inputContraseña.value = "";

    return resultado_busqueda
}

// Función para validar los datos ingresados en el formulario de registro
function validar_datos2 (){
    
    let msj = "";
    
    let inputNuevoUsuario = document.getElementById("nuevo_usuario").value;
    let inputNuevoNombre = document.getElementById("nuevo_nombre").value;
    let inputNuevoApellido = document.getElementById("nuevo_apellido").value;
    let inputNuevaContraseña = document.getElementById("nueva_contraseña").value;


    if ((inputNuevoUsuario != "") && (inputNuevoNombre != "") && (inputNuevoApellido != "") && (inputNuevaContraseña != "")){

       buscar_usuario();

    }else {

        msj = "Los datos ingresados son erroneos, se deben ingresar todos los datos"

        Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: 'Los datos ingresados son erroneos, se deben ingresar todos los datos',
            showConfirmButton: false,
            timer: 2000
          });
    
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
                
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Se ha registrado con éxito'
        })

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
