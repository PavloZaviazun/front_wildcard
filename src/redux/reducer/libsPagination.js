import {SET_LIBS_PAGINATION} from "../action-types";

const initialState = {libsPagination: []};

export const libsPagination = (state = initialState, action) => {

    switch (action.type) {
        case SET_LIBS_PAGINATION: {
            return {...state, libsPagination: action.payload};
        }
        default: {
            return state;
        }
    }
}
