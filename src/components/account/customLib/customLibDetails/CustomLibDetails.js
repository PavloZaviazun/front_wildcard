import "./CustomLibDetails.css";
import {userService} from "../../../../services";

export const CustomLibDetails = (vocabulary) => {
    const {word: {id, word, partOfSpeech, description, example, translation}, wasUpdated, setWasUpdated} = vocabulary;
    let translationObj = JSON.parse(translation);

    const deleteWord = () => {
        userService.deleteFromUserCustomLib(id).then(el => setWasUpdated(!wasUpdated))
    }

    return (
        <div className={"word-div"}>
            <div>{word}</div>
            <div>{partOfSpeech}</div>
            <div>{description}</div>
            <div>{example}</div>
            <div>{translationObj.ru}</div>
            <div>{translationObj.ua}</div>
            <div><button onClick={deleteWord}>Delete</button></div>
        </div>
    )
}
