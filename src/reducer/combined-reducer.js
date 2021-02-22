import { combineReducers } from "redux";
//Reducers
import CountryReducer from "./index";

var reducers = combineReducers({
    counrtriesList: CountryReducer,
});

export default reducers;
