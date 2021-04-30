import "./left-menu.css"
import {useSelector} from "react-redux";

export const LeftMenu = () => {
        const {library: {library}} = useSelector(state => state);

    return(
        <div className={"leftmenu-div"}>
            {library.map(e => <div>{e.name}</div>)}
        </div>
    )
}
