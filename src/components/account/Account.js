import "./Account.css";
import {Link} from "react-router-dom";

export const Account = ({child}) => {
    return(
        <div className={"admin-div"}>
            <div className={"admin-panel"}>
                <div className={"admin-menu"}>
                    <Link to={"/account/profile"}><button>Profile</button></Link>
                    <Link to={"/account/customlib"}><button>Custom Lib</button></Link>
                    <Link to={"/account/mywords"}><button>MyWords</button></Link>
                    <Link to={"/account/favlibs"}><button>Favourite Libs</button></Link>
                </div>
                {child}
            </div>
        </div>
    )
}
