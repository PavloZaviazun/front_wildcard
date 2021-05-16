import "./UserDetails.css";
import {useEffect, useState} from "react";
import {commonService, userService} from "../../../../services";

export const UserDetails = (props) => {
    const {user} = props;

    const [roles, setRoles] = useState([]);
    const [request, setRequest] = useState("");

    useEffect(() => {
        commonService.getAllRoles().then(el => setRoles(el));
    }, [])

    const handleUser = (e, id) => {
        e.preventDefault();
        const form = document.forms.namedItem(`userForm${id}`);
        userService.updateUserAdmin(id, form).then(el => setRequest(el.data));
    }

    return (
        <div>
            <form onSubmit={(e) => handleUser(e, user.id)} name={`userForm${user.id}`}>
                <div className={"user-details-div"}>
                    <div className={"user-details-id"}>{user.id}</div>
                    <div className={"user-details-email"}>{user.email}</div>
                    <div className={"user-details-nativeLang"}>{user.nativeLang}</div>
                    <div className={"user-details-role"}>
                        <select name={"role"}>
                            <option>{user.roles[0]}</option>
                            {roles.filter(el => user.roles[0] !== el).map(el => <option key={el}>{el}</option>)}
                        </select>
                    </div>
                    <div className={"user-details-enabled"}>
                        <input type={"checkbox"} name={"isEnabled"} defaultChecked={user.enabled}/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </form>
            <div>{request}</div>
        </div>
    )
}
