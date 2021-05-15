import "./LeftMenu.css"
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
            {libs.map(lib =>
                <div className={"libLink"} key={lib.id}><LeftMenuDetails lib={lib}/></div>
            )}
        </div>
    )
}
