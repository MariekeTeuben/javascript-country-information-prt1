import axios from 'axios';

async function getCountryInformation() {

    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;

        createListItems(countries);

    } catch (e) {
        console.error(e)
    }
}

getCountryInformation();


function createListItems(countries) {
    const countryList = document.getElementById('list-of-countries');

    countryList.innerHTML = countries.map((country) => {
        return `
        <li>
            <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
            <span class="${getRegionClass(country.region)}">${country.name}</span>
            <p class="population">Has a population of ${country.population} people</p>
        </li>
        `;
    }).join('');
}


function getRegionClass(regionName) {
    switch (regionName) {
        case 'Africa':
        return 'blue';
        break;
        case 'Americas':
        return 'green';
        break;
        case 'Asia':
        return 'red';
        break;
        case 'Europe':
        return 'yellow';
        break;
        case 'Oceania':
        return 'purple';
        break;
        default:
        return 'default';
    }
}
            
