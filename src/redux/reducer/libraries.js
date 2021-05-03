import {SET_LIBRARIES} from "../action-types";

const initialState = {libraries: []};

export const libraries = (state = initialState, action) => {

    switch (action.type) {
        case SET_LIBRARIES: {
            return {...state, libraries: action.payload};
        }
        default: {
            return state;
        }
    }
}
