import "./Login.css"
import {Link, Redirect} from "react-router-dom";
import {authService, userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../redux";
import {useState} from "react";

export const Login = () => {

    const message = "Successfull logination";

    const dispatch = useDispatch();
    const {user: {user}} = useSelector(state => state);
    const [loginResponse, setLoginResponse] = useState("");


    const handleUser = () => {
        userService.getUserByToken().then(user => {
            dispatch(setUser(user))
        });
    }

    const loginHandle = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const myStorage = window.localStorage;
        authService.loginHandle(username, password).then(el => {
            myStorage.setItem("session", el.headers.authorization);
            console.log(el)
            setLoginResponse(el.data)
            if(el.headers.authorization != null && el.headers.authorization !== "undefined") {
                console.log("sdsdsfdf")
                handleUser()
            }
        });
    }

    return (
        <div className={"login-div"}>
            <div className={"login-div-form"}>

                <div>
                    <form onSubmit={loginHandle}>
                        <div>
                            <input placeholder={"Введіть e-mail"}/>
                        </div>
                        <div>
                            <input type={"password"} placeholder={"Введіть пароль"}/>
                        </div>
                        <div>
                            <button>Вхід</button>
                        </div>
                    </form>
                </div>
                {loginResponse}
                {loginResponse === message ? <Redirect to="/"/> : null}
                <div className={"login-div-reg"}>
                    <div>Ще немає профілю?</div>
                    <div>Перейдіть <Link to={"/auth/registration"}>на сторінку реєстрації</Link></div>
                </div>
            </div>
        </div>
    )
}
