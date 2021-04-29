import {SET_LIBRARY, SET_VOCABULARY, SET_LANGUAGE} from "../action-types";

export const setLibrary = (payload) => ({type: SET_LIBRARY, payload});
export const setVocabulary = (payload) => ({type: SET_VOCABULARY, payload});
export const setLanguage = (payload) => ({type: SET_LANGUAGE, payload});
