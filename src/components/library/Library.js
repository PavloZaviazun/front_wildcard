import './Library.css';
import {Card} from "../card";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setWords} from "../../redux";
import {wordService} from "../../services";


export const Library = () => {

    const {words: {words}, libraries: {libraries}} = useSelector(state => state);
    const nameLibrary = window.location.href.split("library/")[1];
    const filtered = libraries.filter(el => el.name === nameLibrary)
    const dispatch = useDispatch();
    console.log(filtered)
    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    useEffect(() => {
        if (filtered.length > 0)
            getWord();
    }, [filtered.length]);

    const getWord = useCallback(async () => {
        const data = await wordService.getWordsFromLib(filtered[0].id);
        dispatch(setWords(data));
    }, [filtered])

    const shuffle = () => {
        words.sort(() => Math.random() - 0.5);
        dispatch(setWords(words));
    }

    return (

        <div className={"div-forcard"}>
            <div className={"div-cardspace"}>
                <Card/>
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
                {words.map(e => <p key={e.id}>{e.word}</p>)}
            </div>
        </div>
    )
}
