import "./AllUsers.css"
import {useCallback, useEffect, useState} from "react";
import {userService} from "../../../../services";
import {UserDetails} from "../userDetails";
import {Pagination} from "../../../pagination";
import {setPagination} from "../../../../redux";
import {useDispatch} from "react-redux";


export const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const currentPage = 1;
    const dispatch = useDispatch();

    const getUsersPage = useCallback(async (page) => {
        const data = await userService.getUsers(page);
        setUsers(data.content);
        dispatch(setPagination([page, data.totalPages]));
    }, [])

    useEffect(() => {
        getUsersPage(currentPage);
    }, [])


    return (
        <div>
            <div className={"user-details-div"}>
                <div className={"user-details-id"}>ID</div>
                <div className={"user-details-email"}>E-mail</div>
                <div className={"user-details-nativeLang"}>NLang</div>
                <div className={"user-details-role"}>Role</div>
                <div className={"user-details-enabled"}>Enabled</div>
            </div>
            {users.length > 0 && users.map(user => {
                return <UserDetails
                    key={user.id}
                    user={user}
                />
            })}
            <div>
                <Pagination getUsersPage={getUsersPage}/>
            </div>
        </div>
    )
}
