import {SET_LIBRARIES, SET_WORDS, SET_LANGUAGE} from "../action-types";

export const setLibraries = (payload) => ({type: SET_LIBRARIES, payload});
export const setWords = (payload) => ({type: SET_WORDS, payload});
export const setLanguage = (payload) => ({type: SET_LANGUAGE, payload});

