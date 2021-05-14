import "./WordElement.css";
import {useState} from "react";
import {userService} from "../../../services";

export const WordElement = ({wordElement:{id, word}, customLibIds:{data}, session}) => {
    const PLUS = "+";
    const MINUS = "-";
    let sign = PLUS;
    const [customLibIds, setCustomLibIds] = useState([]);

    if(customLibIds.length === 0 && data != null) {
        signAssign(data)
    } else {
        signAssign(customLibIds)
    }

    function signAssign (value) {
        for (let el of value) {
            if (id === el) {
                sign = MINUS;
            }
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
                .then(el => fetchData())
        }
        if(sign === PLUS) {
            userService.addToUserCustomLib(id)
                .then(el => fetchData())
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
