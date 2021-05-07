import {SET_PARTSOFSPEECH} from "../action-types";

const initialState = {partsOfSpeech: []};

export const partsOfSpeech = (state = initialState, action) => {

    switch (action.type) {
        case SET_PARTSOFSPEECH: {
            return {...state, partsOfSpeech: action.payload};
        }
        default: {
            return state;
        }
    }
}
