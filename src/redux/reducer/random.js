import {SET_RANDOM} from "../action-types";

const initialState = {random: 10};

export const random = (state = initialState, action) => {

    switch (action.type) {
        case SET_RANDOM: {
            return {...state, random: action.payload};
        }
        default: {
            return state;
        }
    }
}
