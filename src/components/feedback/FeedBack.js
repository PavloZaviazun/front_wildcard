import "./FeedBack.css"
import {commonService} from "../../services";
import {useState} from "react";
import {Redirect} from "react-router-dom";

export const FeedBack = () => {

    const message = "Ваше повідомлення отримано, дякуємо за зворотній зв'язок";

    const [response, setResponse] = useState("");
    const [redirect, setRedirect] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("feedback-form");
        commonService.sendFeedback(form).then(el => setResponse(el.data));
    }

    if(response === message) {
        setTimeout(() => {
            setRedirect(true);
        }, 3000)
    }

    return (
        <div className={"feedback-form-div"}>
            <form onSubmit={sendEmail} className={"feedback-form"} name={"feedback-form"}>
                <label>Введіть ваш e-mail</label>
                <input className={"feedback-email"} name={"email"} type={"text"}
                       required={"required"}/>
                <label>Тема листа</label>
                <input className={"feedback-email"} name={"theme"} type={"text"}
                       required={"required"}/>
                <label>Напишіть повідомлення</label>
                <input className={"feedback-message"} name={"message"} type={"text"}
                       required={"required"}/>
                <button>Send</button>
            </form>
            <div className={"feedback-response"}>
                {response.length > 0 ? response : ""}
                {redirect ? <Redirect to={"/"}/> : null}
            </div>
        </div>
    )
}
