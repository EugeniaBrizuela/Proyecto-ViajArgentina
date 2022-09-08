/**
 * Clase de usuarios que se registran en la página
 */
class Usuario {
    /**
     * 
     * @param {*} usuario - Usuario
     * @param {*} nombre - Nombre del usuario
     * @param {*} apellido - Apellido del usuario
     * @param {*} contraseña - Contraseña del usuario
     */
    constructor (usuario, nombre, apellido, contraseña){
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contraseña = contraseña;
    }
    /**
     * 
     * @returns información del usuario
     */
    info_usuario(){

        return `Información del usuario:\n ${this.usuario} - ${this.nombre} - ${this.apellido}`

    }
}
/**
 * Se arma un arreglo de los datos con un solo usuario
 */
const array_usuario = [];

array_usuario.push (new Usuario ("euge", "eugenia", "brizuela", 1234));

// Pasaje de arreglo a JSON
localStorage.setItem("array_usuario", JSON.stringify(array_usuario));




