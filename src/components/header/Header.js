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
                вероятно тут будет поиск или слоган
            </div>
                {token == null ?
                    <Link to={"/auth/login"}><div>Login/Registration</div></Link> :
                    <Link to={"/account"}><div>Account</div></Link>}
        </div>
    )
}
