import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading} from "../ducks/itemList";
import listOfUsersReducer from "../ducks/ducksListOfUsers";


export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});
