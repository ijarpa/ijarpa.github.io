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

    const fruit1Name = data[0].name;
    const fruit2Name = data[1].name;
    const fruit3Name = data[2].name;

    const optionFruit1 = `<option value="${data[0].id}">${fruit1Name}</option>`;
    const optionFruit2 = `<option value="${data[1].id}">${fruit2Name}</option>`;
    const optionFruit3 = `<option value="${data[2].id}">${fruit3Name}</option>`;

    fruit1.innerHTML = optionFruit1;
    fruit2.innerHTML = optionFruit2;
    fruit3.innerHTML = optionFruit3;
});

document.getElementById('drink-form').addEventListener('submit', function(event) {
event.preventDefault();

const firstName = document.getElementById('firstName').value;
const email = document.getElementById('email').value;
const phoneNumber = document.getElementById('phoneNumber').value;
const fruit1 = document.getElementById('fruit1').innerHTML = data[0].name;
const fruit2 = document.getElementById('fruit2').innerHTML = data[1].name;
const fruit3 = document.getElementById('fruit3').innerHTML = data[2].name;
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


