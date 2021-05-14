import "./MyWords.css";
import {UsersWord} from "../usersWord";
import {useEffect, useState} from "react";
import {commonService, userService} from "../../../services";

export const MyWords = () => {
    // const [usersWords, setUsersWords] = useState([]);
    const [notApproved, setNotApproved] = useState([]);

    const filterApproved = (data) => {
        const notapproved = data.filter(el => !el.approved)
        setNotApproved(notapproved)
    }

    useEffect(() => {
        userService.getCustomLib().then(el => filterApproved(el.data))

    }, [])

    return (
        <div className={"users-words"}>
            <div className={"users-words-add"}>
                <div>Добавить слово</div>
                <div className={"users-words-header"}>
                    <div>Word</div>
                    <div>PartOfSpeech</div>
                    <div>Description</div>
                    <div>Example</div>
                    <div>TranslationRu</div>
                    <div>TranslationUa</div>
                    <div>Submit</div>
                </div>
                <div className={"users-words-form-add"}><UsersWord/></div>
            </div>
            <div>
                <div>Мои добавленные слова</div>
                <div className={"users-words-header"}>
                    <div>Word</div>
                    <div>PartOfSpeech</div>
                    <div>Description</div>
                    <div>Example</div>
                    <div>TranslationRu</div>
                    <div>TranslationUa</div>
                    <div>Submit</div>
                </div>
                <div>
                    {notApproved && notApproved.map(el => <div key={el.id}><UsersWord word={el}/></div>)}
                </div>
            </div>
        </div>
    )
}
