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

