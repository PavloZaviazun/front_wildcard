import "./Profile.css";
import {useEffect, useState} from "react";
import {authService, commonService, userService} from "../../../services";
import {EMAIL_PATTERN} from "../../../util/Constants";

export const Profile = () => {
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({});
    const [nativeLangs, setNativeLangs] = useState([]);
    const [avaliableLangs, setAvaliableLangs] = useState([]);
    const [emailChange, setEmailChange] = useState(false);
    const findAvaliableLangs = () => {
        nativeLangs.filter(el => el === user.nativeLang)
    }

    useEffect(() => {
        let nativeLang = userService.getUserByToken().then(user => {
            setUser(user)
            return user.nativeLang;
        });
        let nativeLangs = commonService.getAllNativeLanguages().then(nativeLangs => {
            setNativeLangs(nativeLangs)
            return nativeLangs
        });
        Promise.all([nativeLangs, nativeLang]).then(res => {
            setAvaliableLangs(res[0].filter(el => el !== res[1]));
        })
        findAvaliableLangs()
    }, [])

    const handleUser = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const nativeLang = e.target[1].value;
        userService.updateUser(user.id, nativeLang, email).then(el => setMessage(el.data));
    }

    const changeFlag = (e) => {
        e.preventDefault();
        setEmailChange(!emailChange)
    }

    const logout = () => {
        authService.logOut().then(el => console.log(el));
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
            <div className={"new-row"}>
                <div>E-mail:</div>
                <div>{user.email}</div>
            </div>
            <button onClick={changeFlag} className={emailChange ? "change-email" : ""}>Change e-mail</button>
            <form onSubmit={handleUser}>
                <div className={"new-row"}>
                    <div className={!emailChange ? "change-email" : ""}>
                        <input defaultValue={user.email} type={"text"}
                               required={true} pattern={EMAIL_PATTERN}/>
                    </div>
                </div>
                <div className={"new-row"}>
                    <div>Native language:</div>
                    <select>
                        <option>{user.nativeLang}</option>
                        {avaliableLangs.map(el => <option key={el}>{el}</option>)}
                    </select>
                </div>
                <button>Submit</button>
            </form>
            <div>Custom Library:</div>
            <div>{user.customLibs}</div>
            <div>{message}</div>
        </div>
    )
}
