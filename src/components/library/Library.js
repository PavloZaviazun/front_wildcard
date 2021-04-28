import './library.css';
import {CardComponent} from "../card";
import {libService, vocabularyService} from "../../services";

export const Library = () => {

    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        const content = document.getElementsByClassName("content");
        coll[0].classList.toggle("active");
        content[0].classList.toggle("content_show");
    }

    const getWord = () => {
        vocabularyService.getVocabulary().then(r => console.log(r))
    }

    return (
        <div className={"div-forcard"}>
            <div className={"div-cardspace"}>
                <CardComponent/>
            </div>
            <div className={"div-cardbutt"}>
                <div>
                    <button onClick={getWord}>Shuffle</button>
                </div>
                <div>
                    <button>Add to fav</button>
                </div>
            </div>
            <button className="collapsible" onClick={collapse}>Open Collapsible</button>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}
