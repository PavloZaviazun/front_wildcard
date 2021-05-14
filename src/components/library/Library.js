import './Library.css';
import {Card} from "../card";
import {useEffect, useState} from "react";
import {userService, wordService} from "../../services";
import {useLocation} from "react-router-dom";
import {WordElement} from "./wordElement";


export const Library = () => {

    const session = window.localStorage.getItem("session");
    // const message = "Слово додано до бібліотеки обраних";
    const [customLibIds, setCustomLibIds] = useState([]);
    const [libName, setLibName] = useState("");
    const [words, setWords] = useState([]);
    const location = useLocation();
    const [shuffleFlag, setShuffleFlag] = useState(false);
    let flag = false;

    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    useEffect(() => {
        setLibName(location.pathname.split("/library/")[1]);
        if (libName.length > 0) getWord(shuffleFlag);
        flag = false;
        if(session != null) userService.getCustomLibIds().then(el => setCustomLibIds(el));
    }, [libName, location, shuffleFlag]);

    const getWord = async (shuffleFlag) => {
        if (location.pathname.split("/library/")[1] === libName) {
            const data = await wordService.getAllWordsFromLib(libName, shuffleFlag);
            setWords(data);
        }
    };

    const shuffle = () => {
        setShuffleFlag(!shuffleFlag);
        flag = true;
    }

    const wordHandle = () => {
        // let count = 0;
        // for(el of customLibIds) {
        //     el === id
        // }
    }

    return (

        <div className={"div-forcard"}>
            <div className={"div-cardspace"}>
                <Card words={words}/>
            </div>
            <div className={"div-cardbutt"}>
                <div>
                    <button id="shuffle" onClick={shuffle}>Shuffle</button>
                </div>
                <div>
                    <button onClick={wordHandle}>Add to custom Lib</button>
                </div>
            </div>
            <button className="collapsible" onClick={collapse}>See all words</button>
            <div className="content">
                {words && words.map(wordElement => {
                    return <WordElement
                    key={wordElement.id}
                    wordElement={wordElement}
                    customLibIds={customLibIds}
                    session={session}
                    />
                })}
            </div>
        </div>
    )
}

