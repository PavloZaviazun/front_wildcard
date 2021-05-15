import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {userService} from "./services";

export const ProtectedRoute = () => {

    let [roles, setRoles] = useState([]);

    const findByRole = async () => {
        await userService.getUserByToken().then(el => {
            setRoles(el.roles)
        })
    }

    useEffect(() => {
        console.log("rol")
        findByRole()
    }, [roles])


    return (
        roles[0] === "ROLE_ADMIN" ? (
            "rororo"
        ) : (
            <Redirect to={{pathname: '/login'}}/>
        )
    )
}

