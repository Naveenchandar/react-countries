import * as types from '../actions/types';

export const initialState = {
    counrtriesList: [],
    counrtryDetails: {},
    errorMsg: ''

};
const CountryReducer = function (state = initialState, action) {

    switch (action.type) {
        case types.FETCH_COUNTRIES_LIST:
            return Object.assign({}, state, {
                counrtriesList: action.payload.counrtriesList
            });
        case types.FETCH_COUNTRY_DETAILS:
            return Object.assign({}, state, {
                counrtryDetails: action.payload.counrtryDetails
            });
        case types.FETCH_ERROR_MSG:
            return Object.assign({}, state, {
                errorMsg: action.payload.errorMsg
            });

        default:
            return state;
    }
}

export default CountryReducer;
