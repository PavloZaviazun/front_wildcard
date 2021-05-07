import "./AddNewWord.css"
import {libService, wordService} from "../../../services";
import {useSelector} from "react-redux";


export const AddNewWord = () => {
    const {libraries: {libraries}} = useSelector(state => state);

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
        <div className={"addition-new-words"}>
            <div className={"div-head-for-words"}>
                <div className={"div-head-for-addwords-name"}>Word in English</div>
                <div className={"div-head-for-addwords-partOS"}>Part of speech</div>
                <div className={"div-head-for-addwords-description"}>Description in English</div>
                <div className={"div-head-for-addwords-example"}>Example</div>
                <div className={"div-head-for-addwords-translationRu"}>Translation RU</div>
                <div className={"div-head-for-addwords-translationUa"}>Translation UA</div>
                <div className={"div-head-for-addwords-addtoLib"}>Library</div>
                <div className={"div-head-for-addwords-submit"}>Submit</div>
            </div>
            <div className={"addition-new-words-Forform"}>
                <form onSubmit={sendNewWord} className={"addition-new-words-form"}>
                    <input className={"addition-new-words-form-name"} name={"word"} type={'text'}/>
                    <select className={"addition-new-words-form-partOS"} name={"partOfSpeech"}>
                        <option value={"Noun"}>Noun</option>
                        <option value={"Adjective"}>Adjective</option>
                        <option value={"Adverb"}>Adverb</option>
                        <option value={"Verb"}>Verb</option>
                        <option value={"Preposition"}>Preposition</option>
                    </select>
                    <input className={"addition-new-words-form-description"} name={"Description"} type={'text'}/>
                    <input className={"addition-new-words-form-example"} name={"Example"} type={'text'}/>
                    <input className={"addition-new-words-form-translationRU"} name={"TranslationRu"} type={'text'}/>
                    <input className={"addition-new-words-form-translationUA"} name={"TranslationUa"} type={'text'}/>
                    <select className={"addition-new-words-form-library"} name={"library"}>
                        <option value={""}/>
                        {libraries.map(el => {
                            return <option key={el.id} value={el.name}>{el.name}</option>
                        })}
                    </select>
                    <button className={"addition-new-words-form-submit"}>Submit</button>
                </form>
            </div>
        </div>
    )
}
