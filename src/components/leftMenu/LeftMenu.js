import "./LeftMenu.css"
import {useEffect, useState} from "react";
import {libService, userService} from "../../services";
import {LeftMenuDetails} from "./leftMenuDetails";
import {Redirect, useLocation} from "react-router-dom";
import {Mode} from "./mode/Mode";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setRandom} from "../../redux";

export const LeftMenu = () => {
    const [libs, setLibs] = useState([]);
    let [role, setRole] = useState("");
    userService.getUserByToken().then(el => {
        setRole(el.roles[0])
    })
    const dispatch = useDispatch();

    useEffect(() => {
        libService.getLibs().then(el => {
            setLibs(el)
        });
    }, []);


    function handleRandom() {
        dispatch(setRandom(Math.round(Math.random() * (100 - 1) + 1)));
    }

    return (
        <div className={"leftmenu-div"}>
            <div className={"mode-div"} onClick={handleRandom}>
            <Link to={"/mode/random"}>Random mode</Link>
            </div>
        <div>
            {libs.map(lib =>
                <div className={"libLink"} key={lib.id}><LeftMenuDetails lib={lib} role={role}/></div>
            )}
        </div>
        </div>
    )
}
