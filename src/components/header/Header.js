import "./header.css"
import {Link} from "react-router-dom";
import Logo from "../../images/wildcard.jpg"

export const Header = () => {


    return(
        <div className={"div-header"}>
            <div>
                <Link to={"/"}><img src={Logo} alt={"Logo"}/></Link>
            </div>
            <div>
                вероятно тут будет поиск или слоган
            </div>
            <div>
               <Link to={"/login"}>Login/Registration</Link>
            </div>
        </div>
    )
}
