import {useCallback, useEffect, useState} from "react";
import {wordService} from "../../../services";
import {UpdateWord} from "../updateWord";
import {setWords} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";

export const AllWordsFromDB = () => {
    const {words: {words}} = useSelector(state => state);
    const [updAllWords, setUpdAllWords] = useState(false);
    const dispatch = useDispatch();

    const getWords = useCallback(async () => {
        const data = await  wordService.getAllWordsFromBD();
        dispatch(setWords(data.data));
    }, [words, updAllWords])

    useEffect(() => {
        getWords();
        setUpdAllWords(false);
    }, [updAllWords])

    return (
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
    )
}
