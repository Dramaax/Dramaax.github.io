//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function selection(link) {
    var option = document.querySelectorAll('#links  a');
    option[0].className = "";
    option[1].className = "";
    option[2].className = "";
    option[3].className = "";
    option[4].className = "";
    option[5].className = "";
    option[6].className = "";
    link.className = "navbar-links";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barre_progress1");
        document.getElementById("css").classList.add("barre_progress2");
        document.getElementById("bd").classList.add("barre_progress3");
        document.getElementById("ps").classList.add("barre_progress4");
    }

}

//

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});