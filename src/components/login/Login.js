import "./Login.css"
import {Link} from "react-router-dom";
import {authService, userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../redux";
import {Redirect} from "react-router";

export const Login = () => {
    const dispatch = useDispatch();
    const {user: {user}} = useSelector(state => state);
    let loginResponse;

    if(loginResponse === "") <Redirect to="/"/>

    const handleUser = () => {
        userService.getUserByToken().then(user => {
            console.log(user)
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
            if(el.headers.authorization != null) {
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
                <div className={"login-div-reg"}>
                    <div>Ще немає профілю?</div>
                    <div>Перейдіть <Link to={"/auth/registration"}>на сторінку реєстрації</Link></div>
                </div>
            </div>
        </div>
    )
}
