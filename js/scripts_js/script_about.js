//Url de data2.json para usar API-Fetch de integrantes
const url2 = "../js/data/data_integrantes.json"; 

//Cambio texto del titulo
let changetittle = document.querySelector("section h1");
changetittle.textContent = "About Us"

//Agrego una descripción introductoria con DOM
let text = document.createElement("p");
text.style.paddingTop = "40px"
text.style.color = "#404040"
text.style.backgroundColor = "#e8f9a979"
text.style.fontSize = "40px"
text.textContent = "Nos gusta viajar a todos lados y concer sobre la gran diversidad de culturas. Por ello somos una comunidad que está constituída por gente de todas las edades que comparte sus experiencias. La gran noticia es que nos encargamos de recibir toda la información actualizada y plasmarla en esta app para facilitarte a vos con tu planificación!";
changetittle.appendChild(text);

//Se aplica un API local con fetch 
fetch (url2)
.then (response => response.json())
.then ((data) =>{
    data.integrantes.forEach((integrantes) => {
        //Se desectructura el array de objetos y agregan alias a cada propiedad
        let { 
            "id": id,
            "nombre": nombre,
            "apellido": apellido,
            "image" : image,
            "datos_integrante": {
                "profesion" : profesion,
                "edad" : edad,
                "telefono" : telefono,
                "email" : email
            }
        
        } = integrantes
        
        //Se invoca al contenedor y se agrega estilo
        let contenedor = document.getElementById("contenedor_integrantes");
        contenedor.style.backgroundColor = "#E7F9A9";
        contenedor.style.backgroundSize = "cover";
        contenedor.style.borderStyle = "solid";
        contenedor.style.borderColor = "#7C6A0A";
        contenedor.style.borderWidth = "2px";
        contenedor.style.paddingBottom = "20px";
        contenedor.style.margin = "0.2px";
        
        //Se crean elementos con DOM, llamando a API local con información
        let titulo = document.createElement ("h2");
        titulo.textContent = "Hola! Yo me llamo " + nombre + " "+ apellido;
        titulo.style.fontSize = "25px";
        titulo.style.borderTopStyle = "solid";
        titulo.style.borderTopColor = "#7C6A0A";
        titulo.style.borderTopWidth = "2px";
        titulo.style.padding = "10px";
        
        let imagen = document.createElement("img");
        imagen.setAttribute("src", image);
        imagen.style.width = "20%";
        imagen.style.marginLeft = "600px"; 
        imagen.style.borderColor = "#7C6A0A";
        imagen.style.borderStyle = "solid";
        imagen.style.borderWidth = "2px";
        
        let desc = document.createElement("p");
        desc.textContent = "Datos integrante: \n\n" + "-Profesión: " + profesion + "\n-Edad: " + edad + "\n-Teléfono: " + telefono + "\n-Email: " + email;
        desc.style.fontSize = "25px";
        desc.style.color = "#5A5A5A";
        desc.style.textAlign = "center";
        
        contenedor.appendChild(titulo);
        contenedor.appendChild(imagen);
        contenedor.appendChild(desc);

    })
});     

//Se agrega un evento de forma asincrónica
setInterval(()=>{
    Toastify({
        text: "Conocenos un poco más",
        className: "main__button4",
        backgroundColor: "#7C6A0A",
        duration: 6000,
        gravity: "top",
        position: "right",
    }).showToast();
}, 4000);

