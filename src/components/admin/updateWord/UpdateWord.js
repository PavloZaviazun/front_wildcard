import "./UpdateWord.css";
import {libService, wordService} from "../../../services";
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

export const UpdateWord = ({word}) => {
    const trans = JSON.parse(word.translation);
    const [notAddedToLibs, setNotAddedToLibs] = useState([]);

    const allLibs = async () => {
        return await libService.getLibs().then(el => el);
    }

    const allLibsOfWord = async () => {
        return await libService.getLibsOfWord(word.id).then(el => el);
    }

    useEffect(() => {
        const promise1 = allLibs();
        const promise2 = allLibsOfWord();
        Promise.all([promise1, promise2]).then(value => {
            const nonAddedLi = value[0].filter(el => !value[1].find(el2 => el.id === el2.id));
            setNotAddedToLibs(nonAddedLi);
        })
    }, [])

    const updateWord = (e) => {
        e.preventDefault();
        const newWord = e.target[0].value;
        const partOfSpeech = e.target[1].value;
        const description = e.target[2].value;
        const example = e.target[3].value;
        const translationRu = e.target[4].value;
        const translationUa = e.target[5].value;
        wordService.updateWord(word.id, newWord, partOfSpeech, description, example, "", {
            "ru": translationRu,
            "ua": translationUa
        });
        const newLib = e.target[6].value;
        if (newLib.length > 0) {
            const Lib = notAddedToLibs.filter(el => el.name === newLib);
            libService.addToLibExistingWord(Lib[0].id, word.id)
        }

    }

    const deleteWord = () => {
        wordService.deleteWord(word.id)
    }

    return (
        <div className={"updateForm"}>
            <div>
                <form onSubmit={updateWord} className={"tableForUpdate"}>
                    <input name={"word"} type={'text'} defaultValue={word.word}/>
                    <select name={"partOfSpeech"} defaultValue={word.partOfSpeech}>
                        <option value={"Noun"}>Noun</option>
                        <option value={"Adjective"}>Adjective</option>
                        <option value={"Adverb"}>Adverb</option>
                        <option value={"Verb"}>Verb</option>
                        <option value={"Preposition"}>Preposition</option>
                    </select>
                    <input name={"Description"} type={'text'} defaultValue={word.description}/>
                    <input name={"Example"} type={'text'} defaultValue={word.example}/>
                    <input name={"Translation ru"} type={'text'} defaultValue={trans.ru}/>
                    <input name={"Translation ua"} type={'text'} defaultValue={trans.ua}/>
                    <select name={"NotAddedToLibs"}>
                        <option value={""}/>
                        {notAddedToLibs.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}
                    </select>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <button onClick={deleteWord}>Delete word</button>
            </div>

        </div>
    )
}
