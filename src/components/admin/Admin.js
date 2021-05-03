import "./Admin.css"
import {Words} from "./words";
import {Users} from "./users";
import {Libraries} from "./libraries";

export const Admin = () => {

    function openWin(e, data) {
        const content = document.getElementsByClassName(data);
        content[0].classList.add(data + "_show")
        const elems = ["forWords", "forUsers", "forLibraries"];
        for (let a = 0; a < elems.length; a++) {
            const content = document.getElementsByClassName(elems[a]);
            if (elems[a] !== data) content[0].classList.remove(elems[a] + "_show")
        }
    }

    return (
        <div className={"admin-panel"}>
            <div className={"admin-menu"}>
                <button onClick={e => openWin(e, "forLibraries")}>Libraries</button>
                <button onClick={e => openWin(e, "forUsers")}>Users</button>
                <button onClick={e => openWin(e, "forWords")}>Words</button>
            </div>
            <div className={"container-for-edition"}>
                <div className={"forWords forWords_show"}>
                    <Words/>
                </div>
                <div className={"forUsers"}>
                    <Users/>
                </div>
                <div className={"forLibraries"}>
                    <Libraries/>
                </div>
            </div>
        </div>
    )
}
