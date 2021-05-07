import "./Libraries.css"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setWords} from "../../../redux";

export const Libraries = () => {
    const dispatch = useDispatch();
    dispatch(setWords([]));

    return (
        <div>
            <div className={"words-edition"}>
                <div><Link to={`/admin/addnewlibrary`}>Добавить библиотеку</Link></div>
                <div><Link to={`/admin/alllibraries`}>Все библиотеки</Link></div>
            </div>
        </div>
    )
}
