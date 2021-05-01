import "./updateWord.css";
import {libService, wordService} from "../../../services";
import {useEffect, useState} from "react";

export const UpdateWord = ({word}) => {
    const trans = JSON.parse(word.translation);
    const [addedToLibs, setAddedToLibs] = useState([]);
    const [notAddedToLibs, setNotAddedToLibs] = useState([]);
    const [allLibs, setAllLibs] = useState([]);

    useEffect(() => {
        libService.getLibs().then(el => setAllLibs(el));
        libService.getLibsOfWord(word.id).then(el => setAddedToLibs(el));
        const nonAddedLi = allLibs.filter(el => !addedToLibs.find(el2 => el.id === el2.id));
        setNotAddedToLibs(nonAddedLi);

    }, [addedToLibs.length])

    const updateWord = (e) => {
        e.preventDefault();
        const wordqq = e.target[0].value;
        const partOfSpeech = e.target[1].value;
        const translationRu = e.target[2].value;
        const translationUa = e.target[3].value;
        const description = e.target[4].value;
        const example = e.target[5].value;
        wordService.updateWord(word.id, wordqq, partOfSpeech, example, description, "", {"ru":translationRu, "ua":translationUa});
    }

    const deleteWord = () => {
        //TODO find word.id
        wordService.deleteWord(word.id)
    }

    return(
            <form onSubmit={updateWord} className={"tableForUpdate"}>
                <input name={"word"} type={'text'} defaultValue={word.word}/>
                <select name={"partOfSpeech"} defaultValue={word.partOfSpeech}>
                    <option value={"Noun"}>Noun</option>
                    <option value={"Adjective"}>Adjective</option>
                    <option value={"Adverb"}>Adverb</option>
                    <option value={"Verb"}>Verb</option>
                    <option value={"Preposition"}>Preposition</option>
                </select>
                <input name={"Translation ru"} type={'text'} defaultValue={trans.ru}/>
                <input name={"Translation ua"} type={'text'} defaultValue={trans.ua}/>
                <input name={"Description"} type={'text'} defaultValue={word.description}/>
                <input name={"Example"} type={'text'} defaultValue={word.example}/>
                <select name={"NotAddedToLibs"}>
                    {notAddedToLibs.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}


                </select>
                <button>Submit</button>
                <button onClick={deleteWord}>Delete word</button>
            </form>

    )
}
