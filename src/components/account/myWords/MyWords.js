import "./MyWords.css";
import {UsersWord} from "../usersWord";
import {useEffect, useState} from "react";
import {userService} from "../../../services";
import {setPagination} from "../../../redux";
import {useDispatch} from "react-redux";
import {Pagination} from "../../pagination";

export const MyWords = () => {
    const [notApproved, setNotApproved] = useState([]);
    const currentPage = 1;
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        fetchCustomLib(currentPage);
        setFlag(false);
    }, [flag]);

    const fetchCustomLib = async (page) => {
        const data = await userService.getCustomLib(true, page);
        setNotApproved(data.pageList);
        dispatch(setPagination([page, data.pageCount]));
        setFlag(false);
    }


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
                <div className={"users-words-form-add"}><UsersWord setFlag={setFlag}/></div>
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
                    {notApproved.length > 0 && notApproved.map(el => <div key={el.id}><UsersWord word={el} setFlag={setFlag}/>
                    </div>)}
                    <div>
                        <Pagination fetchCustomLib={fetchCustomLib}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
