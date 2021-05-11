import "./FeedBack.css"
import {commonService} from "../../services";
import {useState} from "react";

export const FeedBack = () => {
    const [message, setMessage] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("feedback-form");
        commonService.sendFeedback(form).then(el => setMessage(el.data));
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
                {message.length > 0 ? message : ""}
            </div>
        </div>
    )
}
