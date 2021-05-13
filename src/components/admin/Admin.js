import "./Admin.css"
import {Link} from "react-router-dom";

export const Admin = ({child}) => {

    return (
        <div className={"admin-div"}>
            <div className={"admin-panel"}>
            <div className={"admin-menu"}>
                <Link to={"/admin/libraries"}><button>Libraries</button></Link>
                <Link to={"/admin/users"}><button>Users</button></Link>
                <Link to={"/admin/words"}><button>Words</button></Link>
            </div>
            {/*<div className={"admin-child"}>*/}
                {child}
            </div>
        </div>
    )
}
