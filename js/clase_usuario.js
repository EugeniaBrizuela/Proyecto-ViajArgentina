class Usuario {
    constructor (nombre_usuario, apellido_usuario, contraseña){
        this.nombre_usuario = nombre_usuario;
        this.apellido_usuario = apellido_usuario;
        this.contraseña = contraseña;
    }
}

let arreglo_usuario = new Array();

let usuario1 = new Usuario ("LUIS", "PASTOR", "OLAMUNDO");
let usuario2 = new Usuario ("MARTA", "MARTINEZ", "GATO");
let usuario3 = new Usuario ("EUGE", "BRIZUELA", "TRAMPA");

arreglo_usuario.push (usuario1);
arreglo_usuario.push (usuario2);
arreglo_usuario.push (usuario3);

console.log(arreglo_usuario)

