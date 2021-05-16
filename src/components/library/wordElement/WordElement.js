import "./WordElement.css";
import {useEffect, useState} from "react";
import {userService} from "../../../services";

export const WordElement = ({wordElement: {id, word}, role, setWasUpdated, wasUpdated}) => {
    const admin = "ROLE_ADMIN";
    const user = "ROLE_USER";
    const PLUS = "+";
    const MINUS = "-";
    let sign = PLUS;
    const [customLibIds, setCustomLibIds] = useState([]);

    useEffect(() => {
        if (role === admin || role === user) fetchData();
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
        if (sign === MINUS) {
            userService.deleteFromUserCustomLib(id)
                .then(el => {
                    fetchData();
                    setWasUpdated(!wasUpdated);
                })
        }
        if (sign === PLUS) {
            userService.addToUserCustomLib(id)
                .then(el => {
                    fetchData();
                    setWasUpdated(!wasUpdated);
                })
        }
    }

    return (
        <div>
            <div>{word}</div>
            {role === admin || role === user ? (<div onClick={handleWordElement}>
                {sign}
            </div>) : null}
        </div>
    )
}
