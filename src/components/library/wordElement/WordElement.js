import "./WordElement.css";
import {useEffect, useState} from "react";
import {userService} from "../../../services";

export const WordElement = ({wordElement:{id, word}, session, setWasUpdated, wasUpdated}) => {
    const PLUS = "+";
    const MINUS = "-";
    let sign = PLUS;
    const [customLibIds, setCustomLibIds] = useState([]);

    useEffect(() => {
        fetchData();
    }, [wasUpdated])

    for (let el of customLibIds) {
        if (id === el) {
            sign = MINUS;
        }
    }

    const fetchData = () => {
        userService.getCustomLibIds().then(el => {
            setCustomLibIds(el.data)
        });
    }

    const handleWordElement = () => {
        if(sign === MINUS) {
            userService.deleteFromUserCustomLib(id)
                .then(el => {
                    fetchData();
                    setWasUpdated(!wasUpdated);
                })
        }
        if(sign === PLUS) {
            userService.addToUserCustomLib(id)
                .then(el => {
                    fetchData();
                    setWasUpdated(!wasUpdated);
                })
        }
    }

    return(
        <div>
            <div>{word}</div>
            {session ?(<div onClick={handleWordElement}>
                {sign}
            </div>): null}
        </div>
    )
}
