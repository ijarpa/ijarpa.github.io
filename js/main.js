// main.js - Interactividad básica para BI para Todos

document.addEventListener('DOMContentLoaded', function () {
    // Navbar sticky shadow on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

    // Tech stack icons hover (for grayscale effect, handled by CSS)
    // No JS needed, but could add animation if desired

    // Smooth scroll for anchor links (optional, modern browsers support natively)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile nav after click
                if (navLinks && navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                }
            }
        });
    });
});
