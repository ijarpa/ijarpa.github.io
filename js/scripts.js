// scripts.js - Portfolio Iván Jarpa | BI para Todos
// Menú hamburguesa y scroll suave

// Menú hamburguesa para mobile
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll para navegación interna
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Cierra menú en mobile tras navegar
            navLinks.classList.remove('active');
        }
    });
}

// Comentarios explicativos:
// - El menú hamburguesa muestra/oculta los enlaces en mobile.
// - El scroll suave mejora la experiencia de navegación interna.
