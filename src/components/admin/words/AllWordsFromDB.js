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
            {words.map(word => {
                return <div key={word.id}>
                    <UpdateWord setUpdAllWords={setUpdAllWords} word={word}/>
                </div>
            })}
        </div>
    )
}
