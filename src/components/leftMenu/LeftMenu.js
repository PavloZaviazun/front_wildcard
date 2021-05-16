import "./LeftMenu.css"
import {useEffect, useState} from "react";
import {libService} from "../../services";
import {LeftMenuDetails} from "./leftMenuDetails";
import {Mode} from "./mode/Mode";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setRandom} from "../../redux";

export const LeftMenu = () => {
    const [libs, setLibs] = useState([]);
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
                <div className={"libLink"} key={lib.id}><LeftMenuDetails lib={lib}/></div>
            )}
        </div>
        </div>
    )
}
