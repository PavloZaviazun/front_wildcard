import "./LeftMenu.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {libService} from "../../services";
import {LeftMenuDetails} from "./leftMenuDetails";

export const LeftMenu = () => {
    const [libs, setLibs] = useState([]);

    useEffect(() => {
        libService.getLibs().then(el => {
            setLibs(el)
        });
    }, []);

    return (
        <div className={"leftmenu-div"}>
            {libs.map(e =>
                <div className={"libLink"} key={e.id}><LeftMenuDetails name={e.name}/></div>
            )}
        </div>
    )
}
