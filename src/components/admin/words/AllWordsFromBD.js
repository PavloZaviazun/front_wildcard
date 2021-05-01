import {useCallback, useEffect, useState} from "react";
import {wordService} from "../../../services";
import {setVocabulary} from "../../../redux";

export const AllWordsFromBD = () => {
    const [allwords, setAllwords] = useState([]);

    const getWords = () => {
        wordService.getAllWordsFromBD().then(e => setAllwords(e.data));

    }

    useEffect(() => {
        getWords()
    }, [])


    return (

        <div>
            <table>
                <thead>
                <tr>
                    <th scope="col">Word</th>
                    <th scope="col">Part of Speech</th>
                    <th scope="col">Translation</th>
                    <th scope="col">Description</th>
                    <th scope="col">Example</th>
                </tr>
                </thead>
                <tbody>
                {allwords.map(word => {
                    return <tr key={word.id}>
                        <th scope="row">{word.word}</th>
                        <td>{word.partOfSpeech}</td>
                        <td>{word.translation}</td>
                        <td>{word.description}</td>
                        <td>{word.example}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}
