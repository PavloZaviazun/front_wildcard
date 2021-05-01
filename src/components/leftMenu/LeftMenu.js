import "./left-menu.css"
import {useSelector} from "react-redux";

export const LeftMenu = () => {
        const {library: {library}} = useSelector(state => state);

    return(
        <div className={"leftmenu-div"}>
            {library.map(e =>
                <div className={"libLink"} key={e.id}><a href={"/library/" + e.name}>{e.name}</a></div>
            )}
        </div>
    )
}
