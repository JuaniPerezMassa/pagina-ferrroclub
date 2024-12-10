const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.mas-info');
menu.onclick = () => {
    menu.classList.toggle('ri');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '32px',
    duration: 1200,
    reset: true
});

sr.reveal('.main-content h1', {delay: 300, origin: 'left'});
sr.reveal('.main-content p', {delay: 400, origin: 'bottom'});
sr.reveal('.button', {delay: 500, origin: 'right'});

document.querySelector('.mas-info').addEventListener('click', function(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace
    document.querySelector('.texto-movible').classList.toggle('subir');
});

// Añadir al archivo escalada.js
function mostrarContenido() {
    // Subir el texto
    document.querySelector('.main-content').classList.add('subir');
    
    // Mostrar las imágenes una por una
    const imagenes = document.querySelectorAll('.imagen-subida');
    imagenes.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('subir-imagen');
        }, index * 500); // Retrasar la aparición de cada imagen
    });

    // Mostrar nuevo contenido
    document.querySelector('.nuevo-contenido').classList.add('subir');
}
