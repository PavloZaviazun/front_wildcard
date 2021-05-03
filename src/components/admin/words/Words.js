import "./Words.css"
import {AddNewWord} from "../addNewWord";
import {AllWordsFromBD} from "./AllWordsFromBD";

export const Words = () => {

    function showAddNew() {
        document.getElementsByClassName("words-edition-allWords")[0].classList.remove("words-edition-allWords_show")
        document.getElementsByClassName("words-edition-addNew")[0].classList.add("words-edition-addNew_show")
    }

    function showAllWords() {
        document.getElementsByClassName("words-edition-addNew")[0].classList.remove("words-edition-addNew_show")
        document.getElementsByClassName("words-edition-allWords")[0].classList.add("words-edition-allWords_show")
    }

    return (
        <div className={"words-edition"}>
            <div className={"words-edition-butt"}>
                <button onClick={showAddNew}>Добавить слово</button>
                <button onClick={showAllWords}>Посмотреть все слова</button>
            </div>
            <div className={"words-edition-allWords"}><AllWordsFromBD/></div>
            <div className={"words-edition-addNew"}><AddNewWord/></div>
        </div>
    )
}
