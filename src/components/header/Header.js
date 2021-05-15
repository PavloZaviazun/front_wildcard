import "./Header.css"
import {Link} from "react-router-dom";
import Logo from "../../images/wildcard.jpg"
import {useEffect, useState} from "react";
import {userService} from "../../services";

export const Header = () => {
    const token = window.localStorage.getItem("session");
    let [role, setRole] = useState("");

    useEffect(() => {
        userService.getUserByToken().then(el => {
            setRole(el.roles[0]);
        })
    }, [role])

    return(
        <div className={"div-header"}>
            <div>
                <Link to={"/"}><img src={Logo} alt={"Logo"}/></Link>
            </div>
            <div>
                вероятно тут будет поиск или слоган<br/>
            </div>
            <div>
                {role === "ROLE_ADMIN" ?
                    <Link to={"/admin"}>ADMIN PANEL</Link>
                    : ""
                }
            </div>
            <div>
                {token == null ?
                    <Link to={"/auth/login"}><div>Вхід/Реєстрація</div></Link> :
                    <Link to={"/account"}><div>Профіль</div></Link>}
            </div>

        </div>
    )
}
