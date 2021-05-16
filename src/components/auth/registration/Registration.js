import "./Registration.css"
import {authService} from "../../../services";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {EMAIL_PATTERN, PASSWORD_COMP, VALIDATION_PASSWORD} from "../../../util/Constants";

export const Registration = () => {

    const message = "На ваш e-mail відправлено листа для підтвердження реєстрації";
    const [regResponse, setRegResponse] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [passMessage, setPassMessage] = useState("");
    const [passRepeatMessage, setPassRepeatMessage] = useState("");

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
        }
        else {
            setRegResponse(PASSWORD_COMP);
        }

    }
    if(regResponse === message) {
        setTimeout(() => {
            setRedirect(true);
        }, 3000)
    }

    const validationPass = () => {
        setPassMessage(VALIDATION_PASSWORD)
    }

    const validationPassRepeat = () => {
        setPassRepeatMessage(VALIDATION_PASSWORD)
    }

    return (
        <div className={"reg-div"}>
            <div className={"reg-div-form"}>
                <div>
                    <form onSubmit={registrationHandle}>
                        <div>
                            <input type={"email"} placeholder={"Введіть e-mail"}
                                   required={true} pattern={EMAIL_PATTERN}/>
                        </div>
                        <div>
                            <input type={"password"} placeholder={"Введіть пароль"}
                                   required={true} maxLength={30} minLength={5} onInvalid={validationPass}/>
                        </div>
                        {passMessage}
                        <div>
                            <input type={"password"} placeholder={"Повторіть пароль"}
                                   required={true} maxLength={30} minLength={5} onInvalid={validationPassRepeat}/>
                        </div>
                        {passRepeatMessage}
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
