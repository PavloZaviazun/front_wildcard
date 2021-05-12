import "./Users.css"
import {useEffect, useState} from "react";
import {userService} from "../../../services";
import {UserDetails} from "./user";


export const Users = () => {

    const [page, setPage] = useState(0);
    const [pageObj, setPageObj] = useState(null);

    useEffect(() => {
        userService.getUsers(page).then(el => setPageObj(el.data));
    }, []);

    return (
        <div>
            <div className={"user-details-div"}>
            <div className={"user-details-id"}>ID</div>
            <div className={"user-details-email"}>E-mail</div>
            <div className={"user-details-nativeLang"}>NLang</div>
            <div className={"user-details-role"}>Role</div>
            <div className={"user-details-enabled"}>Enabled</div>
            </div>
            {pageObj && pageObj.content.map(user => {
                return <UserDetails
                key={user.id}
                user={user}
                />
            })}

        </div>
    )
}
