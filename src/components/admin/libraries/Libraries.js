import "./Libraries.css"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setWords} from "../../../redux";
import {useEffect} from "react";

export const Libraries = () => {

    const dispatch = useDispatch();
    dispatch(setWords([]));

    // useEffect(() => {
    //     dispatch(setWords([]));
    // })

    return (
        <div>
            <div className={"words-edition"}>
                <div><Link to={"/admin/libraries/addnew"}>Добавить библиотеку</Link></div>
                <div><Link to={"/admin/libraries/all"}>Все библиотеки</Link></div>
            </div>
        </div>
    )
}
