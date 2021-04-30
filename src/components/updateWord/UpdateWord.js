import "./updateWord.css";
import {vocabularyService} from "../../services";
import {useEffect} from "react";

export const UpdateWord = () => {
    let word;


    useEffect(() => {
        vocabularyService.getWord(2).then(e => word = e.data);
    }, [])

    const updateWord = (e) => {
        e.preventDefault();
        const word = e.target[0].value;
        const partOfSpeech = e.target[1].value;
        const example = e.target[2].value;
        const description = e.target[3].value;
        const translation = e.target[4].value;
        vocabularyService.updateWord(2, word, partOfSpeech, example, description, translation);
    }

    const deleteWord = () => {
        //TODO find id
        vocabularyService.deleteWord(2)
    }


    return(
        <div>
            <form onSubmit={updateWord}>
                <input name={"word"} type={'text'}/> word <br/>
                <select name={"partOfSpeech"} >
                    <option value={"Noun"}>Noun</option>
                    <option value={"Adjective"}>Adjective</option>
                    <option value={"Adverb"}>Adverb</option>
                    <option value={"Verb"}>Verb</option>
                    <option value={"Preposition"}>Preposition</option>
                </select> part of speech<br/>
                <input name={"Example"} type={'text'}/> example<br/>
                <input name={"Description"} type={'text'}/> description<br/>
                <input name={"Translation"} type={'text'}/> translation <br/>
                <button>Submit</button>
                <button onClick={deleteWord}>Delete word</button>
            </form>
        </div>
    )
}
