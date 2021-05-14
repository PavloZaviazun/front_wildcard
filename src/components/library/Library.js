import './Library.css';
import {Card} from "../card";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setWords} from "../../redux";
import {userService, wordService} from "../../services";


export const Library = () => {

    const message = "Слово додано до бібліотеки обраних";
    const [customLibIds, setCustomLibIds] = useState([]);
    const [wasChanged, setWasChanged] = useState(false);

    const {words: {words}, libraries: {libraries}} = useSelector(state => state);
    const nameLibrary = window.location.href.split("library/")[1];
    const filtered = libraries.filter(el => el.name === nameLibrary)
    const dispatch = useDispatch();

    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    useEffect(() => {
        if (filtered.length > 0) {
            getWord();
        }
        userService.getCustomLibIds().then(el => setCustomLibIds(el))
    }, [filtered.length]);

    const getWord = useCallback(async () => {
        const data = await wordService.getWordsFromLib(filtered[0].id, 0);
        dispatch(setWords(data.source));
    }, [filtered])

    const shuffle = () => {
        words.sort(() => Math.random() - 0.5);
        dispatch(setWords(words));
    }

    const handleWord = (el) => {
        userService.addWordToUserCustom(el.id).then(el => setWasChanged(!wasChanged));
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
                    <button>Add to custom Lib</button>
                </div>
            </div>
            <button className="collapsible" onClick={collapse}>See all words</button>
            <div className="content">
                {words.map(el => <div key={el.id}>{el.word}
                    <div onClick={() => handleWord(el)}>{customLibIds.includes(el.id) ? "-" : "+"}</div>
                </div>)}
            </div>
        </div>
    )
}

