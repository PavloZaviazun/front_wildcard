import {combineReducers} from "redux";
import {language} from "./language";
import {words} from "./words";
import {libraries} from "./libraries";
import {partsOfSpeech} from "./partsofspeech";

export const reducer = combineReducers({words, libraries, language, partsOfSpeech})
