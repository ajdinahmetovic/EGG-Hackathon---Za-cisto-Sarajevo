import { CHANGE_ICON_HOME, CHANGE_ICON_NFC } from "../constants";

const initialState = {
 
    iconState: false,

}


export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_ICON_HOME:
            return {
                ...state, 
                iconState: true
            }
        case CHANGE_ICON_NFC:
            return {
                ...state, 
                iconState: false
            }
        default:
            return state
    }
}