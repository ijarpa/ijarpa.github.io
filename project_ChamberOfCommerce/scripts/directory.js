const jsonData = 'data.json';
const listButton = document.querySelector('.button-list');
const gridButton = document.querySelector('.button-grid');
const postDirectory = document.querySelector('.post-directory');


// Json table in console
async function showData() {
    const response = await fetch(jsonData);
    const data = await response.json();
    companiesInformation(data.companies);
    console.table(data.companies);
}

showData();

const companiesInformation = (companies) => {
    const companiesContainer = document.querySelector('.post-directory');

    companies.forEach(company => {
        const postBox = document.createElement('div');


        listButton.addEventListener('click', () => {

            postDirectory.classList.remove('post-directory');
            postDirectory.classList.add('post-directory-list');

            postBox.classList.remove('post-box-directory');
            postBox.classList.add('post-box-directory-list');

            postBox.innerHTML = `
            <img src="images/${company.image}" alt="" class="post-img-list">
            <h2 class="company-name-list">${company.name}</h2>
            <p class="post-description">${company.description}</p>
            <h3 class="post-text-membership-list">${company.membership_level}</h3>
            <p class="blank"></p>
            <div class="post-discovery-text-list" >
                <p class="post-text">Specialization: ${company.specialization}</p>
                <p class="post-text">${company.address}</p>
                <p class="post-text">${company.phone}</p>
                <p class="post-text">${company.website}</p>
            </div>
            `
        }
        );

        gridButton.addEventListener('click', () => {

            postDirectory.classList.remove('post-directory-list');
            postDirectory.classList.add('post-directory');

            postBox.classList.remove('post-box-directory-list');
            postBox.classList.add('post-box-directory');

            postBox.innerHTML = `
            <img src="images/${company.image}" alt="" class="post-img">
            <h2 class="company-name">${company.name}</h2>
            <p class="post-description">${company.description}</p>
            <p class="post-text">${company.specialization}</p>
            <p class="post-text">${company.address}</p>
            <p class="post-text">${company.phone}</p>
            <p class="post-text">${company.website}</p>
            <h3 class="post-text">${company.membership_level}</h3>
            `
        }
        );

        companiesContainer.appendChild(postBox);
    });
    gridButton.click();
}