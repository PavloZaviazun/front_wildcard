import "./Registration.css"
import {authService} from "../../services/AuthService";

export const Registration = () => {

    const registrationHandle = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const repeatPassword = e.target[2].value;
        const nativeLang = e.target[3].value;
        if (password === repeatPassword) {
            authService.registrationHandle(email, password, nativeLang).then(el => console.log(el));
        }
        else {
            //TODO показать сообщение что пароли не совпадают
        }
    }

    return (
        <div className={"reg-div"}>
            <div className={"reg-div-form"}>
                <div>
                    <form onSubmit={registrationHandle}>
                        <div>Введите ваш e-mail</div>
                        <div><input placeholder={"E-mail"}/></div>
                        <div>Введите ваш пароль</div>
                        <div><input type={"password"} placeholder={"Пароль"}/></div>
                        <div>Повторите пароль</div>
                        <div><input type={"password"} placeholder={"Повторите пароль"}/></div>
                        <div>Язык по-умолчанию</div>
                        <div><select>
                            <option defaultValue={"true"}>UA</option>
                            <option>RU</option>
                        </select>
                        </div>
                        <button>Регистрация</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
