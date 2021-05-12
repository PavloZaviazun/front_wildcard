import "./Users.css"
import {useEffect, useState} from "react";
import {userService} from "../../../services";

export const Users = () => {

    const [page, setPage] = useState(0);
    const [pageObj, setPageObj] = useState({});

    useEffect(() => {
        userService.getUsers(page).then(el => setPageObj(el.data));
    }, []);

    console.log(pageObj.content)
    return (
        <div>
            {/*{pageObj.content.map(el => el.username)}*/}
        </div>
    )
}
