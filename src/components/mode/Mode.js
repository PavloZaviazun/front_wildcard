import './Mode.css';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {userService, wordService} from "../../services";
import {Card} from "../card";
import {WordElement} from "../library/wordElement";
import {useSelector} from "react-redux";

export const Mode = () => {

    const session = window.localStorage.getItem("session");
    const [customLibIds, setCustomLibIds] = useState(null);
    const [modeName, setModeName] = useState("");
    const [words, setWords] = useState([]);
    const [wasUpdated, setWasUpdated] = useState(false);
    const location = useLocation();
    const {random:{random}} = useSelector(el => el);

    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    useEffect(() => {
        if(location.pathname.split("/mode/")[1] !== modeName) {
            setModeName(location.pathname.split("/mode/")[1]);
        }
        if (modeName.length > 0) getWord();
        if(session != null) userService.getCustomLibIds()
            .then(el => {
                setCustomLibIds(el);
            });
    }, [modeName, location, wasUpdated]);

    const getWord = async () => {
        if (location.pathname.split("/mode/")[1] === modeName) {
            const data = await wordService.getRandomWords(random);
            setWords(data.data);
        }
    };

    return (

        <div className={"div-forcard"}>
            <div className={"div-cardspace"}>
                <Card words={words}
                      setWasUpdated={setWasUpdated}
                      wasUpdated={wasUpdated}
                      customLibIds={customLibIds}/>
            </div>
            <button className="collapsible" onClick={collapse}>See all words</button>
            <div className="content">
                {words && words.map(wordElement => {
                    return <WordElement
                        key={wordElement.id}
                        wordElement={wordElement}
                        session={session}
                        setWasUpdated={setWasUpdated}
                        wasUpdated={wasUpdated}
                    />
                })}
            </div>
        </div>
    )
}

