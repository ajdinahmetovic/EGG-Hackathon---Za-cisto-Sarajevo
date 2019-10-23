import {combineReducers} from "redux";
import containerLocationsReducer from './containerLocationsRedcer'
import notificationReducer from './notificationReducer'
import navReducer from './navReducer'


export default combineReducers({
    containerLocationsReducer,
    notificationReducer,
    navReducer
});