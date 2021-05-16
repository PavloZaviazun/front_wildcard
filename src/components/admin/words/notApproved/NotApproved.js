import "./NotApproved.css"
import {UpdateWord} from "../updateWord";
import {wordService} from "../../../../services";
import {setWords} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";

export const NotApproved = () => {
    const {words: {words}} = useSelector(state => state);
    const [updAllWords, setUpdAllWords] = useState(false);
    const dispatch = useDispatch();

    const getWords = useCallback(async () => {
        const data = await wordService.getAllNotApprovedWords();
        dispatch(setWords(data.data));
    }, [words, updAllWords])

    useEffect(() => {
        getWords();
    }, [])

    return (
        <div className={"not-approved"}>
            <div className={"div-head-for-words"}>
                <div className={"div-head-for-words-approved"}>Approve</div>
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
