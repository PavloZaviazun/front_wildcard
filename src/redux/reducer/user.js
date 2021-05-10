import {SET_USER} from "../action-types";

const initialState = {user: {}};

export const user = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER: {
            return {...state, user: action.payload};
        }
        default: {
            return state;
        }
    }
}
