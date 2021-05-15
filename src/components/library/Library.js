import './Library.css';
import {Card} from "../card";
import {useEffect, useState} from "react";
import {userService, wordService} from "../../services";
import {useLocation} from "react-router-dom";
import {WordElement} from "./wordElement";


export const Library = () => {

    const session = window.localStorage.getItem("session");
    // const message = "Слово додано до бібліотеки обраних";
    const [customLibIds, setCustomLibIds] = useState(null);
    const [libName, setLibName] = useState("");
    const [words, setWords] = useState([]);
    const [wasUpdated, setWasUpdated] = useState(false);
    const location = useLocation();
    // const [shuffleFlag, setShuffleFlag] = useState(false);
    let flag = false;
    let wordsId = [];
    if(words.length > 0) {
        for(let el of words) {
            wordsId.push(el.id);
        }
    }

    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    useEffect(() => {
        setLibName(location.pathname.split("/library/")[1]);
        if (libName.length > 0) getWord(flag, customLibIds);
        if(session != null) userService.getCustomLibIds()
            .then(el => {
                setCustomLibIds(el);
            });
    }, [libName, location, wasUpdated]);

    const getWord = async (shuffleFlag) => {
        if (location.pathname.split("/library/")[1] === libName) {
            const data = await wordService.getAllWordsFromLib(libName, shuffleFlag, wordsId);
            setWords(data);
        }
    };

    const handleShuffle = () => {
        getWord(true)
    }

    return (

        <div className={"div-forcard"}>
            <div className={"div-cardspace"}>
                <Card words={words}
                      setWasUpdated={setWasUpdated}
                      wasUpdated={wasUpdated}
                      customLibIds={customLibIds}/>
            </div>
            <div className={"div-cardbutt"}>
                <div>
                    <button id="shuffle" onClick={handleShuffle}>Shuffle</button>
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
                    setWasUpdated={setWasUpdated}
                    wasUpdated={wasUpdated}
                    />
                })}
            </div>
        </div>
    )
}

