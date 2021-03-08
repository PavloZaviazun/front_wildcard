import "./home.css"
import {LeftMenu} from "../LeftMenu";
import {Body} from "../Body";

export const Home = () => {

    return (
        <div className={"home-div"}>
            <div className={"for-leftmenu"}>
                <LeftMenu/>
            </div>
            <div className={"for-body"}>
                <Body/>
            </div>
        </div>
    )
}
