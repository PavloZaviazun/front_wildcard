import "./CustomLibDetails.css";

export const CustomLibDetails = (vocabulary) => {
    const {word:{word, partOfSpeech, description, example, translation}} = vocabulary;
    let translationObj = JSON.parse(translation);

    return(
        <div className={"word-div"}>
            <div>{word}</div>
            <div>{partOfSpeech}</div>
            <div>{description}</div>
            <div>{example}</div>
            <div>{translationObj.ru}</div>
            <div>{translationObj.ua}</div>
        </div>
    )
}
