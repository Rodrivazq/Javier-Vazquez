
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.style.display = "none"; // Oculta el botón abrir
    cerrar.style.display = "block"; // Muestra el botón cerrar
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.style.display = "block"; // Muestra el botón abrir
    cerrar.style.display = "none"; // Oculta el botón cerrar
})

// Listener para ajustar la visibilidad con cambios de tamaño de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            abrir.style.display = "none";
            cerrar.style.display = "none";
            nav.classList.remove("visible");
        } else {
            if (nav.classList.contains("visible")) {
                abrir.style.display = "none";
                cerrar.style.display = "block";
            } else {
                abrir.style.display = "block";
                cerrar.style.display = "none";
            }
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        const scrollButton = document.querySelector('a[href="#endOfPage"]');
        if (scrollButton) {
          scrollButton.addEventListener('click', function(e) {
            e.preventDefault();
            const endElement = document.querySelector(this.getAttribute('href'));
            if (endElement) {
              endElement.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      });
      
