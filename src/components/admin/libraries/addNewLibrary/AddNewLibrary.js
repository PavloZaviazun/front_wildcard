import "./AddNewLibrary.css"
import {libService} from "../../../../services";
import {useState} from "react";

export const AddNewLibrary = () => {

    const VALIDATION_MESSAGE = "Мін 2 символи латиниці";
    const [message, setMessage] = useState("");
    const [nameMessage, setNameMessage] = useState("");

    const createLib = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        libService.createNewLib(name).then(el => setMessage(el.data));
    }

    const validationName = () => {
        setNameMessage(VALIDATION_MESSAGE)
    }

    return (
        <div>
            <form onSubmit={createLib}>
                <label>Name of Lib: </label>
                <input type={"text"} placeholder={"Введіть назву"}
                       required={true} pattern={"^[A-Za-z]+$"} minLength={2} onInvalid={validationName}/>
                {nameMessage}
                <button>Create</button>
            </form>
            <div>{message}</div>
        </div>
    )
}
