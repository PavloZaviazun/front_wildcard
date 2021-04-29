import {SET_LIBRARY} from "../action-types";

const initialState = {library: []};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_LIBRARY: {
            return {...state, library: action.payload};
        }
        default: {
            return state;
        }
    }
}
