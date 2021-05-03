import {useEffect, useState} from "react";
import {wordService} from "../../../services";
import {UpdateWord} from "../updateWord";

export const AllWordsFromBD = () => {
    const [allwords, setAllwords] = useState([]);


    const getWords = () => {
        wordService.getAllWordsFromBD().then(e => setAllwords(e.data));
    }

    useEffect(() => {
        getWords()
    }, [])

    return (
        <div className={"allWordsHereTable"}>

            {allwords.map(word => {
                return <div key={word.id}>
                    <UpdateWord word={word}/>
                </div>
            })}

        </div>
    )
}
