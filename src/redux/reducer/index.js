import {combineReducers} from "redux";
import {language} from "./language";
import {words} from "./words";
import {libraries} from "./libraries";

export const reducer = combineReducers({words, libraries, language})
