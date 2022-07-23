class Usuario{ 
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.suscripto = true;
    }

    mensaje_bienvenida(){
        alert ("Bienvenido/a " + this.nombre + " " + this.apellido + " a ViajArgentina");

    }
} 



