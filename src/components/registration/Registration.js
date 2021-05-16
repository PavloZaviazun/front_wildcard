import "./Registration.css"
import {authService} from "../../services";
import {useState} from "react";
import {Redirect} from "react-router-dom";

export const Registration = () => {

    const message = "На ваш e-mail відправлено листа для підтвердження реєстрації";

    const [regResponse, setRegResponse] = useState("");
    const [redirect, setRedirect] = useState(false);

    const registrationHandle = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const repeatPassword = e.target[2].value;
        const nativeLang = e.target[3].value;
        if (password === repeatPassword) {
            authService.registrationHandle(email, password, nativeLang)
                .then(el => {
                    setRegResponse(el.data)
                });
        } else {
            setRegResponse("Пароли не совпадают!")
        }
    }

    if (regResponse === message) {
        setTimeout(() => {
            setRedirect(true);
        }, 3000)
    }


    return (
        <div className={"reg-div"}>
            <div className={"reg-div-form"}>
                <div>
                    <form onSubmit={registrationHandle}>
                        <div><input placeholder={"Введіть e-mail"}/></div>
                        <div><input type={"password"} placeholder={"Введіть пароль"}/></div>
                        <div><input type={"password"} placeholder={"Повторіть пароль"}/></div>
                        <div>Мова за змовчуванням:</div>
                        <div><select>
                            <option defaultValue={"true"}>UA</option>
                            <option>RU</option>
                        </select>
                        </div>
                        <button>Реєстрація</button>
                        {regResponse}
                        {redirect ? <Redirect to={"/auth/login"}/> : null}
                    </form>
                </div>
            </div>
        </div>
    )
}
