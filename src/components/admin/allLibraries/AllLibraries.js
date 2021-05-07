import "./AllLibraries.css"
import {useDispatch, useSelector} from "react-redux";
import {wordService} from "../../../services";
import {setWords} from "../../../redux";
import {UpdateWord} from "../updateWord";
import {useState} from "react";
import {AllWordsFromDB} from "../words/AllWordsFromDB";

export const AllLibraries = () => {
    const {libraries: {libraries}} = useSelector(state => state);
    const {words: {words}} = useSelector(state => state);
    const [updAllWords, setUpdAllWords] = useState(false);
    const dispatch = useDispatch();

    const showWords = (id) => {
        const hiddenDiv = document.getElementsByClassName("wordsOfThisLib");
        wordService.getWordsFromLib(id).then(el => {
            dispatch(setWords(el))
        });
    }

    return (
        <div className={"AllLibs"}>
            <div className={"divForAllLibraries"}>
                {libraries.map(el => {
                    return <div className={"div-for-OneLib"} key={el.name}>
                            <button onClick={() => showWords(el.id)}>{el.name}</button>
                    </div>
                })}
            </div>
            <div className={"allWordsHereTable"}>
                <div className={"div-head-for-words"}>
                    <div className={"div-head-for-words-name"}>Word</div>
                    <div className={"div-head-for-words-partOS"}>Part of speech</div>
                    <div className={"div-head-for-words-description"}>Description</div>
                    <div className={"div-head-for-words-example"}>Example</div>
                    <div className={"div-head-for-words-translationRu"}>Translation RU</div>
                    <div className={"div-head-for-words-translationUa"}>Translation UA</div>
                    <div className={"div-head-for-words-addtoLib"}>Add to library</div>
                    <div className={"div-head-for-words-submit"}>Submit</div>
                    <div className={"div-head-for-words-delete"}>Delete</div>
                </div>
                {words.map(word => {
                    return <div key={word.id} className={"div-for-table"}>
                        <UpdateWord setUpdAllWords={setUpdAllWords} word={word}/>
                    </div>
                })}
            </div>
        </div>
    )
}
