import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {libService} from "../../services";

export const CardComponent = () => {

    const [cardBack, setCardBack] = useState(false);
    const [lib, setLib] = useState([]);

    const cardClick = () => {
        setCardBack(!cardBack);
    }

    const prevArrowClick = () => {
        setCardBack(false);
    }

    const nextArrowClick = () => {
        setCardBack(false);
    }

    const getLib = () => {
        libService.getLib().then(library => {
            setLib(library)
        })
    }

    useEffect(() => {
        let frontSide = document.getElementsByClassName("front-side")[0];
        let backSide = document.getElementsByClassName("back-side")[0];
        if(cardBack) {
            ReactDOM.findDOMNode(frontSide).style.transform = "rotateY(180deg)";
            ReactDOM.findDOMNode(backSide).style.transform = "rotateY(360deg)";
        } else {
            ReactDOM.findDOMNode(frontSide).style.transform = "rotateY(0deg)";
            ReactDOM.findDOMNode(backSide).style.transform = "rotateY(180deg)";
        }
    }, [cardBack, lib]);

    return (
        <div className={"card-component"}>
            <div className={"card-outer"}>
                <div className={"arrow prev"} onClick={prevArrowClick}> </div>
                <div className={"card"} onClick={cardClick}>
                    <div className={"front-side"}>
                        <div><span>{lib.length === 0 ? "Abundant" : lib[0].word}</span></div>
                    </div>
                    <div className={"back-side"}>
                        <div>Обильный, изобилующий</div>
                        <div>Present in large quantities.</div>
                        <div>Living close to a lake means we have an abundant supply of water.</div>
                    </div>
                </div>
                <div className={"arrow next"} onClick={nextArrowClick}> </div>
            </div>
            {/*<div>*/}
            {/*    <button onClick={getLib}>Request Lib</button>*/}
            {/*</div>*/}
        </div>
    )
}
