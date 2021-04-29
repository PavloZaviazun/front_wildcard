import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {useSelector} from "react-redux";

export const CardComponent = () => {

    const {vocabulary: {vocabulary}} = useSelector(state => state);
    const [cardBack, setCardBack] = useState(false);
    const [word, setWord] = useState({});
    let [i, setI] = useState(0);

    const cardClick = () => {
        setCardBack(!cardBack);
    }

    const prevArrowClick = () => {
        setCardBack(false);
        if (vocabulary != null) {
            if (i - 1 < 0) setI(vocabulary.length - 1);
            else setI(--i);
            setWord(vocabulary[i]);
        }
    }

    const nextArrowClick = () => {
        setCardBack(false);
        if (i + 1 >= vocabulary.length) setI(0)
        else setI(++i);
        setWord(vocabulary[i]);
    }

    useEffect(() => {
        let frontSide = document.getElementsByClassName("front-side")[0];
        let backSide = document.getElementsByClassName("back-side")[0];
        setWord(vocabulary.length === 0 ? "" : vocabulary[i]);
        if (cardBack) {
            ReactDOM.findDOMNode(frontSide).style.transform = "rotateY(180deg)";
            ReactDOM.findDOMNode(backSide).style.transform = "rotateY(360deg)";
        } else {
            ReactDOM.findDOMNode(frontSide).style.transform = "rotateY(0deg)";
            ReactDOM.findDOMNode(backSide).style.transform = "rotateY(180deg)";
        }
    }, [cardBack, vocabulary, i, vocabulary[i]]);

    return (
        <div className={"card-component"}>
            <div className={"card-outer"}>
                <div className={"arrow prev"} onClick={prevArrowClick}/>
                <div className={"card"} onClick={cardClick}>
                    <div className={"front-side"}>
                        <div><span>{word == null || word.length === 0 ? "Cat" : word.word}</span></div>
                    </div>
                    <div className={"back-side"}>
                        <div>{word == null || word.length === 0 ? "котик" : word.translation}</div>
                        <div>{word == null || word.length === 0 ? "домашний пушистик" : word.description}</div>
                        <div>{word == null || word.length === 0 ? "Cat lies on the floor." : word.example}</div>
                    </div>
                </div>
                <div className={"arrow next"} onClick={nextArrowClick}/>
            </div>
        </div>
    )
}
