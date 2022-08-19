// Eliminar boton

let delettebottom = document.querySelector(".main__button");

delettebottom.remove();

//Cambio texto del titulo

let changetittle = document.querySelector("section h1");
changetittle.textContent = "About Us"

//Agrego una mini descripción

let text = document.createElement("p");
text.style.paddingTop = "40px"
text.style.color = "#404040"
text.style.backgroundColor = "#e8f9a979"
text.style.fontSize = "40px"
text.textContent = "Nos gusta viajar a todos lados y concer sobre la gran diversidad de culturas. Por ello somos una comunidad que está constituída por gente de todas las edades que comparte sus experiencias. La gran noticia es que nos encargamos de recibir toda la información actualizada y plasmarla en esta app para facilitarte a vos con tu planificación!";
changetittle.appendChild(text);

// Creo un objeto de la fundadora
const fundadora = {
    id: 1,
    nombre_integrante: "Marta",
    datos_integrante : {
        profesion : "Topógrafa",
        edad : 42,
        telefono : 2994568988,
        email : "marta_lopez@gmail.com",
    }
}

//Coloco alias
const {
    id : id,
    nombre_integrante : nombre_fundadora,
    datos_integrante : {
        profesion : profesion,
        edad : edad,
        telefono : telefono,
        email : email,
    } 
} = fundadora;

//Uso spread para agregarinfo
const fundadora_spread = {
    ...fundadora,
    hobbie : "Pintura",
};

//Llamo a etiqueta y edito y muestro por DOM
let contFundadora = document.getElementById("contenedor_fundadora");
contFundadora.style.backgroundColor = "#E7F9A9";
contFundadora.style.backgroundSize = "cover";
contFundadora.style.paddingTop= "20px";
contFundadora.style.paddingBottom = "20px"

contFundadora.innerHTML = `<h2>Nombre de fundadora: ${nombre_fundadora} - (id: ${id})</h2><br><br>
                           <h2>Datos: <br><br>Profesión: ${profesion}<br><br>Edad: ${edad}<br><br>Teléfono: ${telefono}<br><br>Email: ${email}</h2>   
                          `

//LLamo a botón para ver hobbie
let btn_hobbie = document.getElementById("btn_hobbie");
btn_hobbie.textContent = "Hobbie";


//Agrego evento y que muestre alert con hobbie
btn_hobbie.addEventListener("click", ()=>{
    alert(fundadora_spread.hobbie);
})




