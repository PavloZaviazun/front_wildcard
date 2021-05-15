import "./UpdateLibrary.css"
import {libService} from "../../../../services";

export const UpdateLibrary = ({setUpdateLib, name, id, setLibName}) => {

    const updateLib = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        libService.updateLib(id, name).then(el => {
            if (el.status === 200) setLibName(name)
        })
        setUpdateLib(false);
    }

    return (
        <div>
            <form onSubmit={updateLib}>
                <input type={"text"} defaultValue={name}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
