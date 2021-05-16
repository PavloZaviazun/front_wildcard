import "./Login.css"
import {Link, Redirect} from "react-router-dom";
import {authService} from "../../../services";
import {useState} from "react";

export const Login = () => {

    const VALIDATION_PASSWORD = "Довжина паролю повинна бути 5-30 символів";
    const message = "Successful logination";
    const [loginResponse, setLoginResponse] = useState("");
    const [passMessage, setPassMessage] = useState("");

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

    const validationPass = () => {
        setPassMessage(VALIDATION_PASSWORD)
    }

    return (
        <div className={"login-div"}>
            <div className={"login-div-form"}>

                <div>
                    <form onSubmit={loginHandle}>
                        <div>
                            <input type={"email"} placeholder={"Введіть e-mail"}
                                   required={true} pattern={"^[a-zA-Z0-9_.%+-]{3,30}@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$"}/>
                        </div>
                        <div>
                            <input type={"password"} placeholder={"Введіть пароль"}
                                   required={true} maxLength={30} minLength={5} onInvalid={validationPass}/>
                        </div>
                        {passMessage}
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
