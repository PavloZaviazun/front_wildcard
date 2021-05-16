import "./NotApproved.css"
import {UpdateWord} from "../updateWord";
import {wordService} from "../../../../services";
import {setPagination, setWords} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {Pagination} from "../../../pagination";

export const NotApproved = () => {
    const {words: {words}} = useSelector(state => state);
    const [updAllWords, setUpdAllWords] = useState(false);
    const dispatch = useDispatch();
    const currentPage = 1;

    const getWords = useCallback(async (page) => {
        const data = await wordService.getNotApprovedWordsPage(page);
        dispatch(setWords(data.pageList));
        dispatch(setPagination([page, data.pageCount]));
    }, [words, updAllWords])

    useEffect(() => {
        getWords(currentPage);
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
            <div>
                <Pagination getWords={getWords}/>
            </div>
        </div>
    )
}
