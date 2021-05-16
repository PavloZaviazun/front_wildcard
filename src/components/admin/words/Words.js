import "./Words.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {commonService, libService} from "../../../services";
import {setLibraries, setPartsOfSpeech} from "../../../redux";


export const Words = () => {
    const dispatch = useDispatch();

    commonService.getAllPartsOfSpeech().then(el => dispatch(setPartsOfSpeech(el)));
    libService.getLibs().then(el => {
        dispatch(setLibraries(el))
    })

    return (
        <div className={"words-edition"}>
            <NavLink activeClassName={"activeBut"} to={`/admin/words/addnew`}>
                <div>Добавить слово</div>
            </NavLink>
            <NavLink activeClassName={"activeBut"} to={`/admin/words/all`}>
                <div>Посмотреть все слова</div>
            </NavLink>
            <NavLink activeClassName={"activeBut"} to={`/admin/words/notapproved`}>
                <div>Слова custLib not Approved</div>
            </NavLink>
        </div>
    )
}
