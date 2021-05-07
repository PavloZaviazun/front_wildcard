import "./Login.css"
import {Link} from "react-router-dom";
import {authService} from "../../services/AuthService";

export const Login = () => {

    const loginHandle = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const myStorage = window.localStorage;
        authService.loginHandle(username, password).then(el => {
            myStorage.setItem("session", el.headers.authorization);
        });
    }

    return (
        <div className={"login-div"}>
            <div className={"login-div-form"}>
                <div>Введите логин(e-mail) и пароль</div>
                <div>
                    <form onSubmit={loginHandle}>
                        <div>
                            <input placeholder={"Логин"}/>
                        </div>
                        <div>
                            <input type={"password"} placeholder={"Пароль"}/>
                        </div>
                        <div>
                            <button>Войти</button>
                        </div>
                    </form>
                </div>
                <div className={"login-div-reg"}>
                    <div>Ещё нет логина?</div>
                    <div>Перейдите <Link to={"/auth/registration"}>на страницу регистрации</Link></div>
                </div>
            </div>
        </div>
    )
}
