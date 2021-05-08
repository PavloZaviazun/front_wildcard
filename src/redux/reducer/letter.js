import {SET_LETTER} from "../action-types";

const initialState = {letter: "A"};

export const letter = (state = initialState, action) => {

    switch (action.type) {
        case SET_LETTER: {
            return {...state, letter: action.payload};
        }
        default: {
            return state;
        }
    }
}
