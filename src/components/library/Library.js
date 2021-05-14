import './Library.css';
import {Card} from "../card";
import {useEffect, useState} from "react";
import {userService, wordService} from "../../services";
import {useLocation} from "react-router";


export const Library = () => {
    // const message = "Слово додано до бібліотеки обраних";
    const [customLibIds, setCustomLibIds] = useState([]);
    const [wasChanged, setWasChanged] = useState(false);
    const [libName, setLibName] = useState("");
    const [words, setWords] = useState([]);
    const location = useLocation();

    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    useEffect(() => {
        setLibName(location.pathname.split("/library/")[1]);
        if (libName.length > 0) getWord();
        userService.getCustomLibIds().then(el => setCustomLibIds(el));
    }, [libName, location]);

    const getWord = async () => {
        if (location.pathname.split("/library/")[1] === libName) {
            const data = await wordService.getAllWordsFromLib(libName);
            setWords(data);
        }
    };

    const shuffle = () => {
        words.sort(() => Math.random() - 0.5);
        setWords(words);
    }

    const handleWord = (el) => {
        userService.addWordToUserCustom(el.id).then(el => setWasChanged(!wasChanged));
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
                    <button>Add to custom Lib</button>
                </div>
            </div>
            <button className="collapsible" onClick={collapse}>See all words</button>
            <div className="content">
                {words && words.map(el => <div key={el.id}>{el.word}
                    <div onClick={() => handleWord(el)}>{customLibIds.includes(el.id) ? "-" : "+"}</div>
                </div>)}
            </div>
        </div>
    )
}
