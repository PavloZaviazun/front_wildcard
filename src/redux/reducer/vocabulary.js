import {SET_VOCABULARY} from "../action-types";

const initialState = {vocabulary: []};

export const vocabulary = (state = initialState, action) => {

    switch (action.type) {
        case SET_VOCABULARY: {
            return {...state, vocabulary: action.payload};
        }
        default: {
            return state;
        }
    }
}
