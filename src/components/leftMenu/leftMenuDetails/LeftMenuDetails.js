import "./LeftMenuDetails.css"
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../../services";

export const LeftMenuDetails = ({lib:{id, name}, role}) => {
    const admin = "ROLE_ADMIN";
    const user = "ROLE_USER";
    const location = useLocation();
    const PLUS = "+";
    const MINUS = "-";
    let sign = PLUS;
    const [favLibs, setFavLibs] = useState([]);
    const [wasUpdated, setWasUpdated] = useState(false);

    useEffect(() => {
        fetchFavLibs();
    }, [wasUpdated]);

    for (let el of favLibs) {
        if (id === el.id) {
            sign = MINUS;
        }
    }

    function fetchFavLibs() {
        userService.getFavLibs().then(el => setFavLibs(el.data))
    }

    let style;
    if (location.pathname.split("/library/")[1] === name) style={backgroundColor:  '#DDEEDE'}

    function handleLib() {
        if(sign === MINUS) {
            userService.deleteFavLib(id)
                .then(el => {
                    fetchFavLibs();
                    setWasUpdated(!wasUpdated);
                })
        }
        if(sign === PLUS) {
            userService.addFavLib(id)
                .then(el => {
                    fetchFavLibs();
                    setWasUpdated(!wasUpdated);
                })
        }
    }

    return (
        <div style={style} className={"lib-div"}>
            <div><Link to={"/library/" + name}>{name}</Link></div>
            {role === admin || role === user ? <div onClick={handleLib}>
                {sign}
            </div> : ""}
        </div>
    )
}
