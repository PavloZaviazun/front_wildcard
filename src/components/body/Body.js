import "./body.css"
import {CardComponent} from "../card";
import {useDispatch} from "react-redux";
import {setVocabulary} from "../../redux";
import {vocabularyService} from "../../services";

export const Body = () => {
    const dispatch = useDispatch();
    dispatch(setVocabulary([]));

    const sendNewWord = (e) => {
        e.preventDefault();
        const word = e.target[0].value;
        const partOfSpeech = e.target[1].value;
        const example = e.target[2].value;
        const description = e.target[3].value;
        const translation = e.target[4].value;
        vocabularyService.addNewWord(word, partOfSpeech, example, description, translation);
        console.log(word)
        console.log(partOfSpeech)
        console.log(example)
        console.log(description)
        console.log(translation)
    }

    return (

        <div className={"body-div"}>
            <CardComponent/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!

                <form onSubmit={sendNewWord}>
                    <input name={"word"} type={'text'} /> word <br/>
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
                </form>
        </div>
    )
}
