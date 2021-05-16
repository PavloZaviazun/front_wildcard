import "./LeftMenu.css"
import {useEffect, useState} from "react";
import {libService, userService} from "../../services";
import {LeftMenuDetails} from "./leftMenuDetails";

export const LeftMenu = () => {
    const [libs, setLibs] = useState([]);
    let [role, setRole] = useState("");
    userService.getUserByToken().then(el => {
        setRole(el.roles[0])
    })

    useEffect(() => {
        libService.getLibs().then(el => {
            setLibs(el)
        });
    }, []);


    return (
        <div className={"leftmenu-div"}>
            {libs.map(lib =>
                <div className={"libLink"} key={lib.id}><LeftMenuDetails lib={lib} role={role}/></div>
            )}
        </div>
    )
}
