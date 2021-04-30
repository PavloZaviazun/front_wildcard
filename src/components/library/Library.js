import './library.css';
import {CardComponent} from "../card";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setVocabulary} from "../../redux";
import {vocabularyService} from "../../services";

export const Library = () => {

    const {vocabulary: {vocabulary}} = useSelector(state => state);

    const dispatch = useDispatch();
    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    const getWord = useCallback(async () => {
        const data = await vocabularyService.getVocabulary();
        dispatch(setVocabulary(data));
    }, [])

    useEffect(() => {
        getWord();
    }, [])

    const shuffle = () => {
        vocabulary.sort(() => Math.random() - 0.5);
        dispatch(setVocabulary(vocabulary));
    }

    return (

        <div className={"div-forcard"}>
            <div className={"div-cardspace"}>
                <CardComponent/>
            </div>
            <div className={"div-cardbutt"}>
                <div>
                    <button id="shuffle" onClick={shuffle}>Shuffle</button>
                </div>
                <div>
                    <button>Add to fav</button>
                </div>
            </div>
            <button className="collapsible" onClick={collapse}>See all words</button>
            <div className="content">
                {vocabulary.map(e => <p key={e.id}>{e.word}</p>)}
            </div>
        </div>
    )
}
