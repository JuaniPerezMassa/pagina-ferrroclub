// Sin `DOMContentLoaded`, solo prueba si el script está al final del `<body>`
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

// Revelar Contenido inicial
function mostrarContenido() {
    const mainContent = document.querySelector('.main-content');
    const nuevoContenido = document.querySelector('.nuevo-contenido');
    
    // Añade la clase que hace que el contenido actual suba
    mainContent.classList.add('subir');
    
    // Espera a que termine la animación del contenido actual antes de mostrar el nuevo
    setTimeout(() => {
        nuevoContenido.classList.add('mostrar-nuevo');
    }, 500); // Ajusta el tiempo para que coincida con la animación CSS
}

// Contenido inicial
function mostrarContenido() {
    const mainContent = document.querySelector('.main-content'); // Selecciona el contenido principal
    const sections = document.querySelectorAll('.section'); // Selecciona todas las secciones ocultas
    
    // Añade la clase que hace que el contenido principal suba
    mainContent.classList.add('subir');
    
    // Muestra las secciones después de un breve retraso
    setTimeout(() => {
        sections.forEach(section => {
            section.classList.add('visible'); // Añade la clase para activar la animación
        });
    }, 500); // Tiempo en milisegundos, ajusta según la animación
}

// Contenido Principal
function mostrarContenido() {
    const mainContent = document.querySelector('.main-content'); // Selecciona el contenido principal
    const sections = document.querySelectorAll('.section'); // Selecciona todas las secciones ocultas
    const gallery = document.querySelector('.gallery'); // Selecciona la galería de imágenes
    
    // Añade la clase que hace que el contenido principal suba
    mainContent.classList.add('subir');
    
    // Muestra las secciones después de un breve retraso
    setTimeout(() => {
        sections.forEach(section => {
            section.classList.add('visible'); // Añade la clase para activar la animación
        });
        
        // Muestra las imágenes en la galería
        gallery.classList.add('visible');
    }, 500); // Ajusta el tiempo de retraso para que coincida con la animación
}