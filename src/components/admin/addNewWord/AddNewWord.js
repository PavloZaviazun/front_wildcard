import "./AddNewWord.css"
import {libService, wordService} from "../../../services";
import {useEffect, useState} from "react";


export const AddNewWord = () => {
    const [libraries, setLibraries] = useState([]);

    const allLibs = async () => {
        return await libService.getLibs().then(el => el);
    }

    useEffect(() => {
        allLibs().then(el => setLibraries(el));
    },[])

    const sendNewWord = (e) => {
        e.preventDefault();
        const word = e.target[0].value;
        const partOfSpeech = e.target[1].value;
        const description = e.target[2].value;
        const example = e.target[3].value;
        const translationRu = e.target[4].value;
        const translationUa = e.target[5].value;
        const library = e.target[6].value;
        if (library.length === 0) {
            wordService.addNewWord(word, partOfSpeech, description, example, {
                "ru": translationRu,
                "ua": translationUa
            });
        } else {
            const found = libraries.filter(el => el.name === library)
            libService.addToLibNotExistingWord(found[0].id, word, partOfSpeech, description, example, {
                "ru": translationRu,
                "ua": translationUa
            });
        }
    }

    return (
        <div>
            <form onSubmit={sendNewWord}>
                <input name={"word"} type={'text'}/> word <br/>
                <select name={"partOfSpeech"}>
                    <option value={"Noun"}>Noun</option>
                    <option value={"Adjective"}>Adjective</option>
                    <option value={"Adverb"}>Adverb</option>
                    <option value={"Verb"}>Verb</option>
                    <option value={"Preposition"}>Preposition</option>
                </select>part of speech<br/>
                <input name={"Description"} type={'text'}/> description<br/>
                <input name={"Example"} type={'text'}/> example<br/>
                <input name={"TranslationRu"} type={'text'}/> translation Ru <br/>
                <input name={"TranslationUa"} type={'text'}/> translation Ua<br/>
                <select name={"library"}>
                    <option value={""}/>
                    {libraries.map(el => {
                        return  <option key={el.id} value={el.name}>{el.name}</option>
                    })}

                </select>add to library<br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
