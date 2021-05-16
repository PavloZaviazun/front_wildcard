import "./Users.css"
import {NavLink} from "react-router-dom";

export const Users = () => {

    return (
        <div className={"admin-users-butt"}>
            <NavLink activeClassName={"activeBut"} to={`/admin/users/all`}>
                <div>All users</div>
            </NavLink>
        </div>
    )
}
