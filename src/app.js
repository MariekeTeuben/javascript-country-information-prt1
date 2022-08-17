import axios from 'axios';

const countryList = document.getElementById('list-of-countries');


async function getCountryInformation() {

    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data);

        countryList.innerHTML = `
        <li>
            <img src=" ${result.data[0].flag}" alt="country-flag"/>
            ${result.data[0].name}
            <p>Has a population of ${result.data[0].population} people</p> 
        </li>
        `

    } catch (e) {
        console.error(e)
    }
}
getCountryInformation();

