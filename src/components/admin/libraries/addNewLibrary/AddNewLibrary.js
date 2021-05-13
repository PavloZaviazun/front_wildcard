import "./AddNewLibrary.css"
import {libService} from "../../../../services";
import {useState} from "react";

export const AddNewLibrary = () => {

    const [message, setMessage] = useState("");

    const createLib = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        libService.createNewLib(name).then(el => setMessage(el.data));
    }

    return (
        <div>
            <form onSubmit={createLib}>
                <label>Name of Lib: </label>
                <input type={"text"}/>
                <button>Create</button>
            </form>
            <div>{message}</div>
        </div>
    )
}
