import {SET_LANGUAGE} from "../action-types";

const initialState = {language: "ua"};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_LANGUAGE: {
            return {...state, language: action.payload};
        }
        default: {
            return state;
        }
    }
}
