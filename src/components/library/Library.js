import './Library.css';
import {Card} from "../card";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setWords} from "../../redux";
import {userService, wordService} from "../../services";


export const Library = () => {

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
        if (filtered.length > 0)
            getWord();
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
        userService.addWordToUserFav(el.id).then(el => console.log(el.data));
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
                {words.map(el => <div key={el.id}>{el.word}<div onClick={() => handleWord(el)}>+</div></div>)}
            </div>
        </div>
    )
}
