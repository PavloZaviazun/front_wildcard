import React, {useEffect, useState} from 'react'
import {Redirect, useLocation} from 'react-router-dom'
import {userService} from "./services";

export const ProtectedRoute = ({roles, child}) => {
    let [role, setRole] = useState("");
    let [result, setResult] = useState("");
    const url = useLocation();

    useEffect(() => {
        userService.getUserByToken().then(el => {
            if (el.roles.length > 0 && roles.includes(el.roles[0])){
                setResult(child);
            } else if (el.roles.length === 0 && roles.length === 0)
                setResult(child)
            else setResult(<Redirect to={{pathname: "/"}}/>)
            // setResult(
            //     el.roles.length > 0 && roles.includes(el.roles[0])
            //     ?
            //     child
            //     :
            //     <Redirect to={{pathname: "/"}}/>
            // )
            setRole(el.roles[0]);
        })
    }, [role, result, url.pathname])

    return (
        <div>
            {result}
        </div>
    )
}

