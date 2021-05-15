import "./LibraryDetails.css"
import {UpdateLibrary} from "../updateLibrary";
import {useState} from "react";

export const LibraryDetails = ({lib, showWords}) => {
    const [updateLib, setUpdateLib] = useState(false);
    const [libName, setLibName] = useState(lib.name);
    const rename = () => {
        setUpdateLib(!updateLib)
    }


    return (
        <div>
            <div className={"div-for-OneLib"}>
                <button onClick={() => showWords(lib.id)}>{libName}</button>
                <button onClick={rename}>Rename</button>
            </div>
            <div  className={!updateLib ? "update-lib" : ""}>
                <UpdateLibrary setUpdateLib={setUpdateLib} name={lib.name} setLibName={setLibName} id={lib.id}/>
            </div>
        </div>
    )
}
