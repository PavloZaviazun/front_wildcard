import {useEffect, useState} from "react";
import {wordService} from "../../../services";
import {UpdateWord} from "../updateWord";

export const AllWordsFromDB = () => {
    const [allwords, setAllwords] = useState([]);
    const [updAllWords, setUpdAllWords] = useState(false);

    const getWords = () => {
        wordService.getAllWordsFromBD().then(e => setAllwords(e.data));
        setUpdAllWords(false)
    }

    useEffect(() => {
        getWords();
    }, [updAllWords])

    return (
        <div className={"allWordsHereTable"}>
            {allwords.map(word => {
                return <div key={word.id}>
                    <UpdateWord setUpdAllWords={setUpdAllWords} word={word}/>
                </div>
            })}

        </div>
    )
}
