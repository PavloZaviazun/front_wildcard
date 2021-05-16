import "./UpdateLibrary.css"
import {libService} from "../../../../services";
import {useState} from "react";

export const UpdateLibrary = ({setUpdateLib, name, id, setLibName}) => {

    const VALIDATION_MESSAGE = "Мін 2 символи латиниці";
    const [nameMessage, setNameMessage] = useState("");

    const updateLib = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        libService.updateLib(id, name).then(el => {
            if (el.status === 200) setLibName(name)
        })
        setUpdateLib(false);
    }

    const validationName = () => {
        setNameMessage(VALIDATION_MESSAGE);
    }

    return (
        <div>
            <form onSubmit={updateLib}>
                <input type={"text"} defaultValue={name}
                       required={true} pattern={"^[A-Za-z]+$"} minLength={2} onInvalid={validationName}/>
                {nameMessage}
                <button>Submit</button>
            </form>
        </div>
    )
}
