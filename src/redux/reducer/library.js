import {SET_LIBRARY} from "../action-types";

const initialState = {library: []};

export const library = (state = initialState, action) => {

    switch (action.type) {
        case SET_LIBRARY: {
            return {...state, library: action.payload};
        }
        default: {
            return state;
        }
    }
}
