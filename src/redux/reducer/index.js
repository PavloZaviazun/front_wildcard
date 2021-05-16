import {combineReducers} from "redux";
import {language} from "./language";
import {words} from "./words";
import {libraries} from "./libraries";
import {partsOfSpeech} from "./partsofspeech";
import {letter} from "./letter";
import {user} from "./user";
import {random} from "./random";
import {pagination} from "./pagination";

export const reducer = combineReducers({words, libraries, language, partsOfSpeech, letter, user, pagination, random})
