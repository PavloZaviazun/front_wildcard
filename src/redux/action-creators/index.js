import {SET_LIBRARIES, SET_WORDS, SET_LANGUAGE, SET_PARTSOFSPEECH, SET_LETTER, SET_USER} from "../action-types";

export const setLibraries = (payload) => ({type: SET_LIBRARIES, payload});
export const setWords = (payload) => ({type: SET_WORDS, payload});
export const setLanguage = (payload) => ({type: SET_LANGUAGE, payload});
export const setPartsOfSpeech = (payload) => ({type: SET_PARTSOFSPEECH, payload});
export const setLetter = (payload) => ({type: SET_LETTER, payload});
export const setUser = (payload) => ({type: SET_USER, payload});

