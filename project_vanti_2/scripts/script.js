// Carrusel de imágenes del Hero
let counter = 0;
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    carousel.style.transform = `translateX(-${counter * 100}%)`;
}, 3000);

// Filtrado de productos (funcionalidad básica)
const filterLinks = document.querySelectorAll('.filter a');
const products = document.querySelectorAll('.product');

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;

        products.forEach(product => {
            const categories = product.dataset.categories;

            if (filter === 'all' || categories.includes(filter)) {
                product.classList.remove('hidden'); // Mostrar producto
            } else {
                product.classList.add('hidden'); // Ocultar producto
            }
        });
    });
});
