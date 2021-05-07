import "./AddNewLibrary.css"
import {libService} from "../../../services";

export const AddNewLibrary = () => {

    const createLib = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        libService.createNewLib(name)
    }

    return (
        <div>
            <form onSubmit={createLib}>
                <label>Name of Lib: </label>
                <input type={"text"}/>
                <button>Create</button>
            </form>
        </div>
    )
}
