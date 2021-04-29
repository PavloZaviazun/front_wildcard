import {combineReducers} from "redux";
import vocabulary from "./vocabulary";
import library from "./library";


export const reducer = combineReducers({vocabulary, library})
