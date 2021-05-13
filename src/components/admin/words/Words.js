import "./Words.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {commonService, libService} from "../../../services";
import {setLibraries, setPartsOfSpeech} from "../../../redux";


export const Words = () => {
    const dispatch = useDispatch();

    commonService.getAllPartsOfSpeech().then(el => dispatch(setPartsOfSpeech(el)));
    libService.getLibsWithPage(0).then(el => {
        dispatch(setLibraries(el.content))
    })

    return (
        <div className={"words-edition"}>
            <div><Link to={`/admin/words/addnew`}>Добавить слово</Link></div>
            <div><Link to={`/admin/words/all`}>Посмотреть все слова</Link></div>
            <div><Link to={`/admin/words/notapproved`}>Слова custLib not Approved</Link></div>
        </div>
    )
}
