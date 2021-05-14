import "./LeftMenuDetails.css"
import {Link, useLocation} from "react-router-dom";

export const LeftMenuDetails = ({name}) => {
    const location = useLocation();
    let style;
    if (location.pathname.split("/library/")[1] === name) style={backgroundColor:  '#DDEEDE'}

    return (
        <div style={style}>
            <Link to={"/library/" + name}>{name}</Link>
        </div>
    )
}
