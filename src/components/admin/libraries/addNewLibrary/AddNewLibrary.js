import "./AddNewLibrary.css"
import {libService} from "../../../../services";
import {useState} from "react";
import {VALIDATION_WORD_MESSAGE, WORD_PATTERN} from "../../../../util/Constants";

export const AddNewLibrary = () => {

    const [message, setMessage] = useState("");
    const [nameMessage, setNameMessage] = useState("");

    const createLib = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        libService.createNewLib(name).then(el => setMessage(el.data));
    }

    const validationName = () => {
        setNameMessage(VALIDATION_WORD_MESSAGE)
    }

    return (
        <div>
            <form onSubmit={createLib}>
                <label>Name of Lib: </label>
                <input type={"text"} placeholder={"Введіть назву"}
                       required={true} pattern={WORD_PATTERN} minLength={2} onInvalid={validationName}/>
                {nameMessage}
                <button>Create</button>
            </form>
            <div>{message}</div>
        </div>
    )
}
