import "./Admin.css"
import {NavLink} from "react-router-dom";

export const Admin = ({child}) => {


    return (
        <div className={"admin-div"}>
            <div className={"admin-panel"}>
                <div className={"admin-menu"}>
                    <NavLink to={"/admin/libraries"} activeClassName={"active"}>
                        <div> Libraries</div>
                    </NavLink>
                    <NavLink to={"/admin/users"} activeClassName={"active"}>
                        <div> Users</div>
                    </NavLink>
                    <NavLink to={"/admin/words"} activeClassName={"active"}>
                        <div>Words</div>
                    </NavLink>
                </div>
                {/*<div className={"admin-child"}>*/}
                {child}
            </div>
        </div>
    )
}

