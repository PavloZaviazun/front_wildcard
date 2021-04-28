import "./login.css"
import {Link} from "react-router-dom";

export const Login = () => {

    return (
        <div className={"login-div"}>
            <div className={"login-div-form"}>
                <div>Введите логин(e-mail) и пароль</div>
                <div>
                    <form>
                        <div>
                            <input placeholder={"Логин"}/>
                        </div>
                        <div>
                            <input placeholder={"Пароль"}/>
                        </div>
                        <div>
                            <button>Войти</button>
                        </div>
                    </form>
                </div>
                <div className={"login-div-reg"}>
                    <div>Ещё нет логина?</div>
                    <div>Перейдите <Link to={"/registration"}>на страницу регистрации</Link></div>
                </div>
            </div>
        </div>
    )
}
