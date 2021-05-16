import {useCallback, useEffect, useState} from "react";
import {wordService} from "../../../services";
import {UpdateWord} from "./updateWord";
import {setWords} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";

export const AllWordsFromDB = () => {
    const {words: {words}} = useSelector(state => state);
    const [letter, setLetter] = useState("A");
    const [updAllWords, setUpdAllWords] = useState(false);
    const dispatch = useDispatch();

    const getWords = useCallback(async () => {
        const data = await  wordService.searchByLetter(letter, 0);
        console.log(data.data)
        dispatch(setWords(data.data.content));
    }, [words, updAllWords])

    useEffect(() => {
        getWords();
        setUpdAllWords(false);
    }, [updAllWords])

    const doSearch = (e) => {
        e.preventDefault();
        const word = e.target[0].value;
        wordService.searchByWord(word).then(el => dispatch(setWords(el.data)))
    }

    const searchByLetter = (letter) => {
        setLetter(letter);
        wordService.searchByLetter(letter, 0).then(el => {
            dispatch(setWords(el.data.content))
        })
    }

    return (
        <div className={"allWordsHereTable"}>
            <div className={"searchWords"}>
                <form onSubmit={doSearch} className={"searchWord"}>
                    <input type={"search"}/>
                    <button>Search</button>
                </form>
            </div>
            <div className={"alphabet"}>
                <div className={"alphabet-div"} onClick={() => searchByLetter("A")}>A</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("B")}>B</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("C")}>C</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("D")}>D</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("E")}>E</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("F")}>F</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("G")}>G</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("H")}>H</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("I")}>I</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("J")}>J</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("K")}>K</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("L")}>L</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("M")}>M</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("N")}>N</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("O")}>O</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("P")}>P</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("Q")}>Q</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("R")}>R</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("S")}>S</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("T")}>T</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("U")}>U</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("V")}>V</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("W")}>W</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("X")}>X</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("Y")}>Y</div>
                <div className={"alphabet-div"} onClick={() => searchByLetter("Z")}>Z</div>
            </div>
            <div className={"div-head-for-words"}>
                <div className={"div-head-for-words-approve"}>Approve</div>
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
    )
}
