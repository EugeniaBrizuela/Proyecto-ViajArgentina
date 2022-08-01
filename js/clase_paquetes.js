// Clase de los paquetes posibles para las dos ciudades (Bariloche - El Bolsón)

class Paquete {
    constructor(id, localidad, estadia, precioEstadia, viaje, precioViaje, temporada, actividad, precioActividad, tarjeta){
        this.id = parseInt(id);
        this.localidad = localidad;
        this.estadia = estadia;
        this.precioEstadia = parseInt(precioEstadia);
        this.viaje = viaje;
        this.precioViaje = parseInt(precioViaje);
        this.temporada = temporada;
        this.actividad = actividad;
        this.precioActividad = parseInt(precioActividad);
        this.tarjeta = tarjeta;
    }

    descripcionPaquete(){
        return "Descripción del paquete:\n\n" + "Localidad: " + this.localidad + "\nTemporada: " + this.temporada + "\nEstadía: " + this.estadia + "\nViaje: " + this.viaje + "\nActividad: " + this.actividad;
    }

    precioPaquete(){
        if (this.tarjeta){

            return "Descripción del presupuesto:\n\n" +  "Presupuesto: \n-Estadía: $" + this.precioEstadia + "\n-Viaje: $" + this.precioViaje + "\n-Actividad: $" + this.precioActividad + "\n-Descuento: $5000"+ "\nTOTAL (x persona x día)= $" + (this.precioEstadia + this.precioViaje + this.precioActividad - 500);

        }else {
            
            return "Descripción del presupuesto:\n\n" + "Presupuesto: \n-Estadía: $" + this.precioEstadia + "\n-Viaje: $" + this.precioViaje + "\n-Actividad: $" + this.precioActividad + "\nTOTAL (x persona x día)= $" + (this.precioEstadia + this.precioViaje + this.precioActividad);
        }

    }
}

//Arreglo donde se guardan las 8 posibilidades de paquetes

let arreglo_paquete = new Array ();
//Actividad en Bariloche-Naturaleza-Invierno
let paquete1 = new Paquete (1, "Bariloche", "Los Nonos", 13000, "Avión (Buenos Aires-Bariloche)", 20000, "Invierno", "Esquí en Cerro Catedral", 8000, true);
//Actividad en Bariloche-Ciudad-Invierno
let paquete2 = new Paquete (2, "Bariloche", "Huemul", 20000, "Avión (Buenos Aires-Bariloche)", 20000, "Invierno", "Complejo de spa Caviahue", 10000, false);
//Actividad en Bariloche-Naturaleza-Verano
let paquete3 = new Paquete (3, "Bariloche", "Cabañas Alma", 15000, "Avión (Buenos Aires-Bariloche)", 20000, "Verano", "Paseo en barco y actividad en bicicleta", 12000, true);
//Actividad en Bariloche-Ciudad-Verano
let paquete4 = new Paquete (4, "Bariloche", "Huemul", 20000, "Avión (Buenos Aires-Bariloche)", 20000, "Verano", "Complejo de verano Patagonia Splash", 15000, true);
//Actividad en El Bolsón-Naturaleza-Invierno
let paquete5 = new Paquete (5, "El Bolsón", "El Noble", 8000, "Avión (Buenos Aires-Neuquén)-Omnibus (Neuquén-El Bolsón)", 18000,"Invierno", "Snowboard y culipatín", 4000, false);
//Actividad en El Bolsón-Ciudad-Invierno
let paquete6 = new Paquete (6, "El Bolsón", "El noble", 8000, "Avión (Buenos Aires-Neuquén)-Alquiler auto(Neuquén-El Bolsón)", 20000,"Invierno", "Complejo de relajación La Esperanza", 8000, false);
//Actividad en El Bolsón-Naturaleza-Verano
let paquete7 = new Paquete (7, "El Bolsón", "Camping La Huella", 5000, "Avión (Buenos Aires-Neuquén)-Omnibus(Neuquén-El Bolsón)", 18000,"Verano", "Camino al refugio Cajon del Azul", 5000, true);
//Actividad en El Bolsón-Ciudad-Verano
let paquete8 = new Paquete (8, "El Bolsón", "Hotel La Montañita", 14000, "Avión (Buenos Aires-Neuquén)-Omnibus(Neuquén-El Bolsón)", 18000,"Verano", "Tour por la ciudad", 8000, false);

arreglo_paquete.push(paquete1);
arreglo_paquete.push(paquete2);
arreglo_paquete.push(paquete3);
arreglo_paquete.push(paquete4);
arreglo_paquete.push(paquete5);
arreglo_paquete.push(paquete6);
arreglo_paquete.push(paquete7);
arreglo_paquete.push(paquete8);
