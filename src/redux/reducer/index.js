import {combineReducers} from "redux";
import {vocabulary} from "./vocabulary";
import {library} from "./library";
import {language} from "./language";

export const reducer = combineReducers({vocabulary, library, language})
