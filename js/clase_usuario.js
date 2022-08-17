class Usuario {
    constructor (usuario, nombre, apellido, contraseña){
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contraseña = contraseña;
    }

    info_usuario(){

        return `Información del usuario:\n ${this.usuario} - ${this.nombre} - ${this.apellido}`

    }
}

const array_usuario = [];

array_usuario.push (new Usuario ("euge", "eugenia", "brizuela", 1234));
localStorage.setItem("array_usuario", JSON.stringify(array_usuario));




