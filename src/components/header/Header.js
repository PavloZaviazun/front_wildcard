import "./Header.css"
import {Link} from "react-router-dom";
import Logo from "../../images/wildcard.jpg"
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const Header = () => {

    const token = window.localStorage.getItem("session");
    const {user: {user}} = useSelector(state => state);
    useEffect(() => {

    }, [user])
    return(
        <div className={"div-header"}>
            <div>
                <Link to={"/"}><img src={Logo} alt={"Logo"}/></Link>
            </div>
            <div>
                вероятно тут будет поиск или слоган<br/>
                <Link to={"/admin"}>ADMIN PANEL</Link>
            </div>
                {token == null ?
                    <Link to={"/auth/login"}><div>Вхід/Реєстрація</div></Link> :
                    <Link to={"/account"}><div>Профіль</div></Link>}
        </div>
    )
}
