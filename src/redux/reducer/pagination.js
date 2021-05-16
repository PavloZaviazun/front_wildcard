import {SET_PAGINATION} from "../action-types";

const initialState = {pagination: []};

export const pagination = (state = initialState, action) => {

    switch (action.type) {
        case SET_PAGINATION: {
            return {...state, pagination: action.payload};
        }
        default: {
            return state;
        }
    }
}
