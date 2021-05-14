import "./LeftMenu.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {libService} from "../../services";

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
                <div className={"libLink"} key={e.id}><Link to={"/library/" + e.name}>{e.name}</Link></div>
            )}
        </div>
    )
}
