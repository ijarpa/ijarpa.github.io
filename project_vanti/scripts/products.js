// Fetch fruit data from the provided JSON file
// Fetch product data from the provided JSON file
fetch('data/products.json')
  .then(response => response.json())
  .then(productData => {
    console.table(productData);

    const cardsContainer = document.querySelector('.cards');
    productData.forEach(product => {
      let card = document.createElement('div');
      let productImage = document.createElement('img');
      let productName = document.createElement('h3');
      let productDescription  = document.createElement('p');
      let productFamily  = document.createElement('p');
      let productOwner = document.createElement('h4');

      productName.textContent = product.name;
      productFamily.textContent = `Family: ${product.family}`;
      productDescription.textContent = product.description;
      productImage.src = product.image;
      productImage.alt = product.name;
      productOwner.textContent = `• ${product.owner}`;

      card.appendChild(productImage);
      card.appendChild(productName);
      card.appendChild(productDescription);
      card.appendChild(productOwner);

      

      // add classes
      card.classList.add(`card`, `${product.family}`);
      productName.classList.add('product-name', 'card-text');
      productOwner.classList.add('product-owner', 'card-text');
      productDescription.classList.add('product-description', 'card-text');

      cardsContainer.appendChild(card);
    });
  });
