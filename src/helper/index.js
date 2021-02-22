import store from '../store/index';
import {
    loadCountriesList,
    loadCountryDetails,
    fetchErrorMsg
} from '../actions/index';

export async function fetchCountriesList() {
    await fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then((data) => {
            if (data?.length > 0) {
                store.dispatch(loadCountriesList(data));
            }
        })
        .catch(error => {
            console.log('error', error);
        })
}

export async function fetchCountryByName({ targetValue }) {
    const responseData = await fetch(`https://restcountries.eu/rest/v2/name/${targetValue}`)
    if (responseData.status !== 200) {
        store.dispatch(fetchErrorMsg('No Countries Found'));
    } else {
        const data = await responseData.json();
        if (data?.length > 0) {
            store.dispatch(loadCountriesList(data));
            store.dispatch(fetchErrorMsg(''))
        } else {
            store.dispatch(loadCountriesList([]));
        }
    }
}

export async function fetchCountryDetails({ countryDetails }) {
    store.dispatch(loadCountryDetails(countryDetails))
}