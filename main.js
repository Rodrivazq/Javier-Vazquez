
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

