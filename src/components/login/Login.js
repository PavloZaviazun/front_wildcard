import "./Login.css"
import {Link, Redirect} from "react-router-dom";
import {authService} from "../../services";
import {useState} from "react";

export const Login = () => {
    const message = "Successful logination";
    const [loginResponse, setLoginResponse] = useState("");

    const loginHandle = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const myStorage = window.localStorage;
        authService.loginHandle(username, password).then(el => {
            myStorage.setItem("session", el.headers.authorization);
            setLoginResponse(el.data)
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
