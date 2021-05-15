import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {useSelector} from "react-redux";
import "./Card.css"
import {userService} from "../../services";


export const Card = ({words, wasUpdated, setWasUpdated, role}) => {
    const admin = "ROLE_ADMIN";
    const user = "ROLE_USER";
    const serverURL = "http://localhost:8080";
    const {language: {language}} = useSelector(state => state);
    const [cardBack, setCardBack] = useState(false);
    const [buttonName, setButtonName] = useState("");
    const [customLibIds, setCustomLibIds] = useState(null);

    const [word, setWord] = useState({
        approved: true,
        description: "Little kitten",
        example: "Little cat is playing on the ground",
        id: 0,
        image: "",
        partOfSpeech: "NOUN",
        translation: "{\"ru\":\"кот\",\"ua\":\"кіт\"}",
        word: "Cat"
    });

    let [i, setI] = useState(0);
    let translation = "";
    const cardClick = () => {
        setCardBack(!cardBack);
    }

    const getTranslation = () => {
        let trans = JSON.parse(word.translation);
        if (language === "ru") translation = trans.ru;
        if (language === "ua") translation = trans.ua;
        return translation;
    }

    const prevArrowClick = () => {
        setCardBack(false);
        if (words != null) {
            if (i - 1 < 0) setI(words.length - 1);
            else setI(--i);
            setWord(words[i]);
        }
    }

    const nextArrowClick = () => {
        setCardBack(false);
        if (i + 1 >= words.length) setI(0)
        else setI(++i);
        setWord(words[i]);
    }

    useEffect(() => {
        userService.getCustomLibIds().then(el => {
            if (el != null) {
                return setCustomLibIds(el.data)
            }})
        let frontSide = document.getElementsByClassName("front-side")[0];
        let backSide = document.getElementsByClassName("back-side")[0];
        if (words !== undefined && words.length > 0){
            setWord(words[i])
        }
        if (cardBack) {
            ReactDOM.findDOMNode(frontSide).style.transform = "rotateY(180deg)";
            ReactDOM.findDOMNode(backSide).style.transform = "rotateY(360deg)";
        } else {
            ReactDOM.findDOMNode(frontSide).style.transform = "rotateY(0deg)";
            ReactDOM.findDOMNode(backSide).style.transform = "rotateY(180deg)";
        }
        if(customLibIds) {
            setButtonName(customLibIds.includes(word.id) ? "Delete" : "Add");
        }
    }, [cardBack, words, i, buttonName, word]);

    let background;
    if(word !== undefined && word.image ) {
        background = {
            backgroundImage: `url(${serverURL}/cardImages/${word.image})`,
        };
    }

    const wordHandle = () => {
        let count = 0;

            for (let id of customLibIds) {
                if (word.id === id) count++;
            }

        if(count === 0) userService.addToUserCustomLib(word.id).then(el => {
            setWasUpdated(!wasUpdated)
        });
        else userService.deleteFromUserCustomLib(word.id).then(el => {
            setWasUpdated(!wasUpdated)
        });
    }

    return (
        <div className={"card-component"}>
            <div className={"card-outer"}>
                <div className={"arrow prev"} onClick={prevArrowClick}/>
                <div className={"card"} onClick={cardClick}>
                    <div className={"front-side"} style={background}>
                        <div><span>{word.word}</span></div>
                    </div>
                    <div className={"back-side"}>
                        <div>{getTranslation()}</div>
                        <div>{word.description}</div>
                        <div>{word.example}</div>
                    </div>
                </div>
                <div className={"arrow next"} onClick={nextArrowClick}/>
            </div>
            {role === admin || role === user ? <div>
                <button onClick={wordHandle}>{buttonName}</button>
            </div> : ""}
        </div>
    );
}
