import {
    SET_LIBRARIES,
    SET_WORDS,
    SET_LANGUAGE,
    SET_PARTSOFSPEECH,
    SET_LETTER,
    SET_USER,
    SET_RANDOM,
    SET_PAGINATION, SET_LIBS_PAGINATION, SET_SEARCH_PAGINATION
} from "../action-types";

export const setLibraries = (payload) => ({type: SET_LIBRARIES, payload});
export const setWords = (payload) => ({type: SET_WORDS, payload});
export const setLanguage = (payload) => ({type: SET_LANGUAGE, payload});
export const setPartsOfSpeech = (payload) => ({type: SET_PARTSOFSPEECH, payload});
export const setLetter = (payload) => ({type: SET_LETTER, payload});
export const setUser = (payload) => ({type: SET_USER, payload});
export const setRandom = (payload) => ({type: SET_RANDOM, payload});
export const setPagination = (payload) => ({type: SET_PAGINATION, payload});
export const setLibsPagination = (payload) => ({type: SET_LIBS_PAGINATION, payload});
export const setSearchPagination = (payload) => ({type: SET_SEARCH_PAGINATION, payload});

