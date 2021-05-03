import "./LeftMenu.css"
import {useSelector} from "react-redux";

export const LeftMenu = () => {
        const {libraries: {libraries}} = useSelector(state => state);

    return(
        <div className={"leftmenu-div"}>
            {libraries.map(e =>
                <div className={"libLink"} key={e.id}><a href={"/library/" + e.name}>{e.name}</a></div>
            )}
        </div>
    )
}
