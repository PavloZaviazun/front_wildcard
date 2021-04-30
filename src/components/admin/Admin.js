import "./admin.css"
import {Words} from "./words";
import {Users} from "./users";
import {Libraries} from "./libraries";


export const Admin = () => {

    function openWin(e, data) {
        const content = document.getElementsByClassName(data);
        content[0].classList.toggle(data + "_show")
        const elems = ["forWords", "forUsers", "forLibraries"];
        for (let a = 0; a < elems.length; a++) {
            const content = document.getElementsByClassName(elems[a]);
            if (elems[a] !== data) content[0].classList.remove(elems[a] + "_show")
        }

    }

    return (
        <div>
            <div className={"admin-menu"}>
                <button onClick={e => openWin(e, "forWords")}>Words</button>
                <button onClick={e => openWin(e, "forUsers")}>Users</button>
                <button onClick={e => openWin(e, "forLibraries")}>Libraries</button>
            </div>
            <div className={"container-for-edition"}>
                <div className={"forWords"}>
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
