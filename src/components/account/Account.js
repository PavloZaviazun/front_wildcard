import "./Account.css";
import {NavLink} from "react-router-dom";

export const Account = ({child}) => {
    return (
        <div className={"admin-div"}>
            <div className={"admin-panel"}>
                <div className={"admin-menu"}>
                    <NavLink to={"/account/profile"}>
                        <div>Profile</div>
                    </NavLink>
                    <NavLink to={"/account/customlib"}>
                        <div>Custom Lib</div>
                    </NavLink>
                    <NavLink to={"/account/mywords"}>
                        <div>MyWords</div>
                    </NavLink>
                    <NavLink to={"/account/favlibs"}>
                        <div>Favourite Libs</div>
                    </NavLink>
                </div>
                {child}
            </div>
        </div>
    )
}
