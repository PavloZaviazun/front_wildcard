import {SET_SEARCH_PAGINATION} from "../action-types";


const initialState = {searchPagination: []};

export const searchPagination = (state = initialState, action) => {

    switch (action.type) {
        case SET_SEARCH_PAGINATION: {
            return {...state, searchPagination: action.payload};
        }
        default: {
            return state;
        }
    }
}
