document.addEventListener('DOMContentLoaded', function() {
    const isFromOfferLink = checkIfFromOfferLink();

    if (isFromOfferLink) {
    //   loadScript('scripts/fruitsOffers.js');
        let data;

        // Fetch fruit data from the provided JSON file
        fetch('data/fruits.json')
        .then(response => response.json())
        .then(fruitData => {
            data = fruitData;
            console.table(data);

            const fruit1 = document.getElementById('fruit1');
            const fruit2 = document.getElementById('fruit2');
            const fruit3 = document.getElementById('fruit3');

            const fruit1Name = data[25].name;
            const fruit2Name = data[0].name;
            const fruit3Name = data[38].name;

            const optionFruit1 = `<option value="${data[25].id}">${fruit1Name}</option>`;
            const optionFruit2 = `<option value="${data[0].id}">${fruit2Name}</option>`;
            const optionFruit3 = `<option value="${data[38].id}">${fruit3Name}</option>`;

            fruit1.innerHTML = optionFruit1;
            fruit2.innerHTML = optionFruit2;
            fruit3.innerHTML = optionFruit3;
        });

        document.getElementById('drink-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const fruit1 = document.getElementById('fruit1').value;
        const fruit2 = document.getElementById('fruit2').value;
        const fruit3 = document.getElementById('fruit3').value;
        const specialInstructions = document.getElementById('specialInstructions').value;

        const output = document.getElementById('output');

        const orderDate = new Date().toLocaleDateString();

        // total nutrition values
        const selectedFruits = [fruit1, fruit2, fruit3];
        const totalNutrition = selectedFruits.reduce((acc, fruitId) => {
            const fruit = data.find(item => item.id === Number(fruitId));
            if (fruit) {
            acc.carbohydrates += fruit.nutritions.carbohydrates;
            acc.protein += fruit.nutritions.protein;
            acc.fat += fruit.nutritions.fat;
            acc.calories += fruit.nutritions.calories;
            acc.sugar += fruit.nutritions.sugar;
            }
            return acc;
        }, { carbohydrates: 0, protein: 0, fat: 0, calories: 0, sugar: 0 });

        output.innerHTML = `
        <div class="output">
        <h2>Order Details</h2>
        <section class="order-details">
            <p>Order Date:</p>
            <p>${orderDate}</p>
            <p>First Name:</p>
            <p>${firstName}</p>
            <p>Email:</p>
            <p>${email}</p>
            <p>Phone Number:</p>
            <p>${phoneNumber}</p>
            <p>Fruit 1:</p>
            <p>${fruit1}</p>
            <p>Fruit 2:</p>
            <p>${fruit2}</p>
            <p>Fruit 3:</p>
            <p>${fruit3}</p>
            <p>Special Instructions:</p>
            <p>${specialInstructions}</p>
        </section>
        <h3>Total Nutrition</h3>
        <section class="order-details">
            <p>Carbohydrates:</p>
            <p>${totalNutrition.carbohydrates.toFixed(2)} g</p>
            <p>Protein:</p>
            <p>${totalNutrition.protein.toFixed(2)} g</p>
            <p>Fat:</p>
            <p>${totalNutrition.fat.toFixed(2)} g</p>
            <p>Calories:</p>
            <p>${totalNutrition.calories}</p>
            <p>Sugar:</p>
            <p>${totalNutrition.sugar.toFixed(2)} g</p>
        </section>
        </div>
        `;
        }
        );
        
        localStorage.removeItem('clicked');
    } 
    else if (checkIfFromOffer2Link()) {
        let data;

        // Fetch fruit data from the provided JSON file
        fetch('data/fruits.json')
        .then(response => response.json())
        .then(fruitData => {
            data = fruitData;
            console.table(data);

            const fruit1 = document.getElementById('fruit1');
            const fruit2 = document.getElementById('fruit2');
            const fruit3 = document.getElementById('fruit3');

            const fruit1Name = data[34].name;
            const fruit2Name = data[35].name;
            const fruit3Name = data[5].name;

            const optionFruit1 = `<option value="${data[34].id}">${fruit1Name}</option>`;
            const optionFruit2 = `<option value="${data[35].id}">${fruit2Name}</option>`;
            const optionFruit3 = `<option value="${data[5].id}">${fruit3Name}</option>`;

            fruit1.innerHTML = optionFruit1;
            fruit2.innerHTML = optionFruit2;
            fruit3.innerHTML = optionFruit3;
        });

        document.getElementById('drink-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const fruit1 = document.getElementById('fruit1').value;
        const fruit2 = document.getElementById('fruit2').value;
        const fruit3 = document.getElementById('fruit3').value;
        const specialInstructions = document.getElementById('specialInstructions').value;

        const output = document.getElementById('output');

        const orderDate = new Date().toLocaleDateString();

        // total nutrition values
        const selectedFruits = [fruit1, fruit2, fruit3];
        const totalNutrition = selectedFruits.reduce((acc, fruitId) => {
            const fruit = data.find(item => item.id === Number(fruitId));
            if (fruit) {
            acc.carbohydrates += fruit.nutritions.carbohydrates;
            acc.protein += fruit.nutritions.protein;
            acc.fat += fruit.nutritions.fat;
            acc.calories += fruit.nutritions.calories;
            acc.sugar += fruit.nutritions.sugar;
            }
            return acc;
        }, { carbohydrates: 0, protein: 0, fat: 0, calories: 0, sugar: 0 });

        output.innerHTML = `
        <div class="output">
        <h2>Order Details</h2>
        <section class="order-details">
            <p>Order Date:</p>
            <p>${orderDate}</p>
            <p>First Name:</p>
            <p>${firstName}</p>
            <p>Email:</p>
            <p>${email}</p>
            <p>Phone Number:</p>
            <p>${phoneNumber}</p>
            <p>Fruit 1:</p>
            <p>${fruit1}</p>
            <p>Fruit 2:</p>
            <p>${fruit2}</p>
            <p>Fruit 3:</p>
            <p>${fruit3}</p>
            <p>Special Instructions:</p>
            <p>${specialInstructions}</p>
        </section>
        <h3>Total Nutrition</h3>
        <section class="order-details">
            <p>Carbohydrates:</p>
            <p>${totalNutrition.carbohydrates.toFixed(2)} g</p>
            <p>Protein:</p>
            <p>${totalNutrition.protein.toFixed(2)} g</p>
            <p>Fat:</p>
            <p>${totalNutrition.fat.toFixed(2)} g</p>
            <p>Calories:</p>
            <p>${totalNutrition.calories}</p>
            <p>Sugar:</p>
            <p>${totalNutrition.sugar.toFixed(2)} g</p>
        </section>
        </div>
        `;
        }
        );
        
        localStorage.removeItem('clicked');
    }
    else if (checkIfFromOffer3Link()) {
        let data;

        // Fetch fruit data from the provided JSON file
        fetch('data/fruits.json')
        .then(response => response.json())
        .then(fruitData => {
            data = fruitData;
            console.table(data);

            const fruit1 = document.getElementById('fruit1');
            const fruit2 = document.getElementById('fruit2');
            const fruit3 = document.getElementById('fruit3');

            const fruit1Name = data[18].name;
            const fruit2Name = data[28].name;
            const fruit3Name = data[29].name;

            const optionFruit1 = `<option value="${data[18].id}">${fruit1Name}</option>`;
            const optionFruit2 = `<option value="${data[28].id}">${fruit2Name}</option>`;
            const optionFruit3 = `<option value="${data[29].id}">${fruit3Name}</option>`;

            fruit1.innerHTML = optionFruit1;
            fruit2.innerHTML = optionFruit2;
            fruit3.innerHTML = optionFruit3;
        });

        document.getElementById('drink-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const fruit1 = document.getElementById('fruit1').value;
        const fruit2 = document.getElementById('fruit2').value;
        const fruit3 = document.getElementById('fruit3').value;
        const specialInstructions = document.getElementById('specialInstructions').value;

        const output = document.getElementById('output');

        const orderDate = new Date().toLocaleDateString();

        // total nutrition values
        const selectedFruits = [fruit1, fruit2, fruit3];
        const totalNutrition = selectedFruits.reduce((acc, fruitId) => {
            const fruit = data.find(item => item.id === Number(fruitId));
            if (fruit) {
            acc.carbohydrates += fruit.nutritions.carbohydrates;
            acc.protein += fruit.nutritions.protein;
            acc.fat += fruit.nutritions.fat;
            acc.calories += fruit.nutritions.calories;
            acc.sugar += fruit.nutritions.sugar;
            }
            return acc;
        }, { carbohydrates: 0, protein: 0, fat: 0, calories: 0, sugar: 0 });

        output.innerHTML = `
        <div class="output">
        <h2>Order Details</h2>
        <section class="order-details">
            <p>Order Date:</p>
            <p>${orderDate}</p>
            <p>First Name:</p>
            <p>${firstName}</p>
            <p>Email:</p>
            <p>${email}</p>
            <p>Phone Number:</p>
            <p>${phoneNumber}</p>
            <p>Fruit 1:</p>
            <p>${fruit1}</p>
            <p>Fruit 2:</p>
            <p>${fruit2}</p>
            <p>Fruit 3:</p>
            <p>${fruit3}</p>
            <p>Special Instructions:</p>
            <p>${specialInstructions}</p>
        </section>
        <h3>Total Nutrition</h3>
        <section class="order-details">
            <p>Carbohydrates:</p>
            <p>${totalNutrition.carbohydrates.toFixed(2)} g</p>
            <p>Protein:</p>
            <p>${totalNutrition.protein.toFixed(2)} g</p>
            <p>Fat:</p>
            <p>${totalNutrition.fat.toFixed(2)} g</p>
            <p>Calories:</p>
            <p>${totalNutrition.calories}</p>
            <p>Sugar:</p>
            <p>${totalNutrition.sugar.toFixed(2)} g</p>
        </section>
        </div>
        `;
        }
        );
        
        localStorage.removeItem('clicked');
    }
    else if (checkIfFromOffer4Link()) {
        let data;

        // Fetch fruit data from the provided JSON file
        fetch('data/fruits.json')
        .then(response => response.json())
        .then(fruitData => {
            data = fruitData;
            console.table(data);

            const fruit1 = document.getElementById('fruit1');
            const fruit2 = document.getElementById('fruit2');
            const fruit3 = document.getElementById('fruit3');

            const fruit1Name = data[30].name;
            const fruit2Name = data[16].name;
            const fruit3Name = data[3].name;

            const optionFruit1 = `<option value="${data[30].id}">${fruit1Name}</option>`;
            const optionFruit2 = `<option value="${data[16].id}">${fruit2Name}</option>`;
            const optionFruit3 = `<option value="${data[3].id}">${fruit3Name}</option>`;

            fruit1.innerHTML = optionFruit1;
            fruit2.innerHTML = optionFruit2;
            fruit3.innerHTML = optionFruit3;
        });

        document.getElementById('drink-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const fruit1 = document.getElementById('fruit1').value;
        const fruit2 = document.getElementById('fruit2').value;
        const fruit3 = document.getElementById('fruit3').value;
        const specialInstructions = document.getElementById('specialInstructions').value;

        const output = document.getElementById('output');

        const orderDate = new Date().toLocaleDateString();

        // total nutrition values
        const selectedFruits = [fruit1, fruit2, fruit3];
        const totalNutrition = selectedFruits.reduce((acc, fruitId) => {
            const fruit = data.find(item => item.id === Number(fruitId));
            if (fruit) {
            acc.carbohydrates += fruit.nutritions.carbohydrates;
            acc.protein += fruit.nutritions.protein;
            acc.fat += fruit.nutritions.fat;
            acc.calories += fruit.nutritions.calories;
            acc.sugar += fruit.nutritions.sugar;
            }
            return acc;
        }, { carbohydrates: 0, protein: 0, fat: 0, calories: 0, sugar: 0 });

        output.innerHTML = `
        <div class="output">
        <h2>Order Details</h2>
        <section class="order-details">
            <p>Order Date:</p>
            <p>${orderDate}</p>
            <p>First Name:</p>
            <p>${firstName}</p>
            <p>Email:</p>
            <p>${email}</p>
            <p>Phone Number:</p>
            <p>${phoneNumber}</p>
            <p>Fruit 1:</p>
            <p>${fruit1}</p>
            <p>Fruit 2:</p>
            <p>${fruit2}</p>
            <p>Fruit 3:</p>
            <p>${fruit3}</p>
            <p>Special Instructions:</p>
            <p>${specialInstructions}</p>
        </section>
        <h3>Total Nutrition</h3>
        <section class="order-details">
            <p>Carbohydrates:</p>
            <p>${totalNutrition.carbohydrates.toFixed(2)} g</p>
            <p>Protein:</p>
            <p>${totalNutrition.protein.toFixed(2)} g</p>
            <p>Fat:</p>
            <p>${totalNutrition.fat.toFixed(2)} g</p>
            <p>Calories:</p>
            <p>${totalNutrition.calories}</p>
            <p>Sugar:</p>
            <p>${totalNutrition.sugar.toFixed(2)} g</p>
        </section>
        </div>
        `;
        }
        );
        
        localStorage.removeItem('clicked');
    }
    else {
      loadScript('scripts/fruits.js');
    }
  });

  function checkIfFromOfferLink() {
    const clicked = localStorage.getItem('clicked');
    return clicked === 'off1';
  }

  function checkIfFromOffer2Link() {
    const clicked = localStorage.getItem('clicked');
    return clicked === 'off2';
  }

  function checkIfFromOffer3Link() {
    const clicked = localStorage.getItem('clicked');
    return clicked === 'off3';
  }

  function checkIfFromOffer4Link() {
    const clicked = localStorage.getItem('clicked');
    return clicked === 'off4';
  }

  function handleClick() {
    localStorage.setItem('clicked', 'off1'); // Guardar el valor de 'clicked' en el localStorage
  }

  function loadScript(scriptSrc) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.head.appendChild(script);
  }


  
  
  
  