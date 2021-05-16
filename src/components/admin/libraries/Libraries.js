import "./Libraries.css"
import {NavLink} from "react-router-dom";

export const Libraries = () => {

    return (
        <div>
            <div className={"words-edition"}>
                <NavLink activeClassName={"activeBut"} to={"/admin/libraries/addnew"}><div>Добавить библиотеку</div></NavLink>
                <NavLink activeClassName={"activeBut"} to={"/admin/libraries/all"}><div>Все библиотеки</div></NavLink>
            </div>
        </div>
    )
}
