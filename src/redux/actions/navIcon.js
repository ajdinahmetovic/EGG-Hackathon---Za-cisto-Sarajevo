import { 
    CHANGE_ICON_HOME, 
    CHANGE_ICON_NFC
 } from "../constants";
export const setHome = (id) => dispatch => {
    dispatch({
        type: CHANGE_ICON_HOME,
        payload: true
    })
};

export const setNFC = (id) => dispatch => {
    dispatch({
        type: CHANGE_ICON_NFC,
        payload: true
    })
};