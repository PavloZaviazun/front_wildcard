import "./AddNewWord.css"
import {libService, wordService} from "../../../../services";
import {useSelector} from "react-redux";
import {useState} from "react";


export const AddNewWord = () => {

    const VALIDATION_WORD_MESSAGE = "Мін 2 символи латиниці";
    const VALIDATION_SENTENCE_MESSAGE = "Речення латиницею"
    const VALIDATION_TRANSLATION_RU_MESSAGE = "Переклади російською через ;"
    const VALIDATION_TRANSLATION_UA_MESSAGE = "Переклади українською через ;"

    const [wordMessage, setWordMessage] = useState("");
    const [descriptionMessage, setDescriptionMessage] = useState("");
    const [exampleMessage, setExampleMessage] = useState("");
    const [translationRuMessage, setTranslationRuMessage] = useState("");
    const [translationUaMessage, setTranslationUaMessage] = useState("");
    const WORD_PATTERN = "^[A-Za-z]+$";
    const SENTENCE_PATTERN = "[a-zA-Z0-9, .!@#$%^&*()\"\"'`?&;:]+"
    const TRANSLATION_RU_PATTERN = "[а-яА-ЯэЭъЪёЁ ;]+"
    const TRANSLATION_UA_PATTERN = "[а-яА-ЯєЄїЇ'` ;]+"

    const [message, setMessage] = useState("");

    const {libraries: {libraries}} = useSelector(state => state);

    const sendNewWord = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("wordForm");
        const library = form[6].value;
        if (library.length === 0) {
            wordService.addNewWord(form).then(el => setMessage(el.data));
        } else {
            const found = libraries.filter(el => el.name === library)
            libService.addToLibNotExistingWord(found[0].id, form).then(el => setMessage(el.data));
        }
    }

    const validationWord = () => {
        setWordMessage(VALIDATION_WORD_MESSAGE)
    }
    const validationDescription = () => {
        setDescriptionMessage(VALIDATION_SENTENCE_MESSAGE)
    }
    const validationExample = () => {
        setExampleMessage(VALIDATION_SENTENCE_MESSAGE)
    }
    const validationTranslationRu = () => {
        setTranslationRuMessage(VALIDATION_TRANSLATION_RU_MESSAGE)
    }
    const validationTranslationUa = () => {
        setTranslationUaMessage(VALIDATION_TRANSLATION_UA_MESSAGE)
    }

    return (
        <div>
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
                    <form onSubmit={sendNewWord} className={"addition-new-words-form"} name={"wordForm"}>
                        <input className={"addition-new-words-form-name"} name={"word"} type={"text"}
                               required={true} pattern={WORD_PATTERN} minLength={2} onInvalid={validationWord}/>
                        {wordMessage}
                        <select className={"addition-new-words-form-partOS"} name={"partOfSpeech"}>
                            <option value={"Noun"}>Noun</option>
                            <option value={"Adjective"}>Adjective</option>
                            <option value={"Adverb"}>Adverb</option>
                            <option value={"Verb"}>Verb</option>
                            <option value={"Preposition"}>Preposition</option>
                        </select>
                        <input className={"addition-new-words-form-description"} name={"description"} type={"text"}
                               required={true} pattern={SENTENCE_PATTERN} minLength={2}
                               onInvalid={validationDescription}/>
                        {descriptionMessage}
                        <input className={"addition-new-words-form-example"} name={"example"} type={"text"}
                               required={true} pattern={SENTENCE_PATTERN} minLength={2} onInvalid={validationExample}/>
                        {exampleMessage}
                        <input className={"addition-new-words-form-translationRU"} name={"translationRu"} type={"text"}
                               pattern={TRANSLATION_RU_PATTERN} minLength={2} onInvalid={validationTranslationRu}/>
                        {translationRuMessage}
                        <input className={"addition-new-words-form-translationUA"} name={"translationUa"} type={"text"}
                               pattern={TRANSLATION_UA_PATTERN} minLength={2} onInvalid={validationTranslationUa}/>
                        {translationUaMessage}
                        <select className={"addition-new-words-form-library"} name={"library"}>
                            <option value={""}/>
                            {libraries.map(el => {
                                return <option key={el.id} value={el.name}>{el.name}</option>
                            })}
                        </select>
                        <input type={"file"} name={"image"}/>
                        <button className={"addition-new-words-form-submit"}>Submit</button>
                    </form>
                </div>
            </div>
            <div>{message}</div>
        </div>
    )
}
