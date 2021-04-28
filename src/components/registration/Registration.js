import "./registration.css"

export const Registration = () => {

    return (
        <div className={"reg-div"}>
            <div className={"reg-div-form"}>
                <div>
                    <form>
                        <div>Введите ваш e-mail</div>
                        <div><input placeholder={"E-mail"}/></div>
                        <div>Введите ваш пароль</div>
                        <div><input placeholder={"Пароль"}/></div>
                        <div>Повторите пароль</div>
                        <div><input placeholder={"Повторите пароль"}/></div>
                        <button>Регистрация</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
