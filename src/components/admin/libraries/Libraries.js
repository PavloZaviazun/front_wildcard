import "./Libraries.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Libraries = () => {

    return (
        <div>
            <div className={"words-edition"}>
                <div><Link to={`/admin/addnewlibrary`}>Добавить библиотеку</Link></div>
                <div><Link to={`/admin/alllibraries`}>Все библиотеки</Link></div>
            </div>
        </div>
    )
}
