import "./Words.css"
import {Link} from "react-router-dom";


export const Words = () => {

    return (
        <div className={"words-edition"}>
            <div><Link to={`/admin/addnewword`}>Добавить слово</Link></div>
            <div><Link to={`/admin/allwords`}>Посмотреть все слова</Link></div>
        </div>
    )
}
