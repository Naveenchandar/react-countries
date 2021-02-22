import * as types from './types';

export function loadCountriesList(data) {
  return {
    type: types.FETCH_COUNTRIES_LIST,
    payload: {
      "counrtriesList": data
    }
  };
}

export function loadCountryDetails(data) {
  return {
    type: types.FETCH_COUNTRY_DETAILS,
    payload: {
      "counrtryDetails": data
    }
  };
}

export function fetchErrorMsg(data) {
  return {
    type: types.FETCH_ERROR_MSG,
    payload: {
      "errorMsg": data
    }
  };
}