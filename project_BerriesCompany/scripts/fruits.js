let data;

// Fetch fruit data from the provided JSON file
fetch('data/fruits.json')
  .then(response => response.json())
  .then(fruitData => {
    data = fruitData;

    const fruitOptions = data.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`);
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
      const defaultOption = `<option value="" selected disabled>Select a fruit</option>`;
      select.innerHTML = defaultOption + fruitOptions.join('');
    });
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
      <p class="order-info">Order Date:</p>
      <p>${orderDate}</p>
      <p class="order-info">First Name:</p>
      <p>${firstName}</p>
      <p class="order-info">Email:</p>
      <p>${email}</p>
      <p class="order-info">Phone Number:</p>
      <p>${phoneNumber}</p>
      <p class="order-info">Fruit 1:</p>
      <p>${fruit1}</p>
      <p class="order-info">Fruit 2:</p>
      <p>${fruit2}</p>
      <p class="order-info">Fruit 3:</p>
      <p>${fruit3}</p>
      <p class="order-info">Special Instructions:</p>
      <p>${specialInstructions}</p>
  </section>
  <h3>Total Nutrition</h3>
  <section class="order-details">
      <p class="order-info">Carbohydrates:</p>
      <p>${totalNutrition.carbohydrates.toFixed(2)} g</p>
      <p class="order-info">Protein:</p>
      <p>${totalNutrition.protein.toFixed(2)} g</p>
      <p class="order-info">Fat:</p>
      <p>${totalNutrition.fat.toFixed(2)} g</p>
      <p class="order-info">Calories:</p>
      <p>${totalNutrition.calories}</p>
      <p class="order-info">Sugar:</p>
      <p>${totalNutrition.sugar.toFixed(2)} g</p>
  </section>
</div>
  `;
}
);
