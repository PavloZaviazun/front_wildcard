import {SET_WORDS} from "../action-types";

const initialState = {words: []};

export const words = (state = initialState, action) => {

    switch (action.type) {
        case SET_WORDS: {
            return {...state, words: action.payload};
        }
        default: {
            return state;
        }
    }
}
