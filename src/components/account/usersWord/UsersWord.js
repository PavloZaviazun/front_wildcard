import "./UsersWord.css"
import {Button, Checkbox, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {commonService, libService, userService, wordService} from "../../../services";
import {setPartsOfSpeech} from "../../../redux";
import {useEffect, useState} from "react";

export const UsersWord = ({word}) => {

    const [form] = Form.useForm();
    const [partsOfSpeech, setPartsOfSpeech] = useState([]);
    const [translation1, setTranslation1] = useState(word === undefined ? {} : JSON.parse(word.translation))

    function loadForm() {
        form.setFieldsValue({
            word: word.word,
            partOfSpeech: word.partOfSpeech,
            description: word.description,
            example: word.example,
            translationRu: translation1.ru,
            translationUa: translation1.ua,
        })
    }


    useEffect(() => {
        commonService.getAllPartsOfSpeech().then(el => setPartsOfSpeech(el))
        if (word !== undefined){
            loadForm();
        }

    }, [])

    const handleWord = () => {
        if (word !== undefined){
            const form = document.forms.namedItem(`usersWordForm${word.id}`);
            userService.updateWordInUserCustom(form, word.id).then(el => console.log(el))
        } else {
            const form = document.forms.namedItem(`usersWordForm`);
            userService.addNewWordToUserCustom(form).then(el => console.log(el))
        }
    }

    return (
        <div className={"users-word"}>
            <div className={"user-add-word"}>
                <div className={"user-add-word-form"}>
                    <Form form={form} onFinish={handleWord} className={"tableForUsersWord"} name={word === undefined ? `usersWordForm` : `usersWordForm${word.id}`}>
                        <Form.Item
                            className={"user-add-word-name"}
                            name="word"
                            rules={[{
                                required: true,
                                message: 'Please input word!',
                            },
                                {
                                    pattern: /[a-z]+/,
                                    message: "не по паттерну",
                                }]}>
                            <Input name="word"/>
                        </Form.Item>
                        <Form.Item
                            className={"user-add-word-partOS"}
                            name="partOfSpeech">
                            <select name="partOfSpeech" value={"pa"}>
                                {partsOfSpeech.map(el => <option key={el} value={el}>{el}</option>)}
                            </select>
                        </Form.Item>
                        <Form.Item
                            className={"user-add-word-description"}
                            name="description"
                            rules={[{
                                message: 'Please input description!',
                            },
                                {
                                    pattern: '[a-zA-Z\p{P}]+',
                                    message: "не по паттерну",
                                }]}>
                            <Input name="description"/>
                        </Form.Item>
                        <Form.Item
                            className={"user-add-word-example"}
                            name="example"
                            rules={[{
                                // required: true,
                                message: 'Please input example!',
                            },]}>
                            <Input name="example"/>
                        </Form.Item>
                        <Form.Item
                            className={"user-add-word-translationRu"}
                            name="translationRu"
                            rules={[{
                                message: 'Please input translationRU!',
                            },]}>
                            <Input name="translationRu"/>
                        </Form.Item>
                        <Form.Item
                            className={"user-add-word-translationUa"}
                            name="translationUa"
                            rules={[{
                                message: 'Please input translationUA!',
                            },
                            ]}>
                            <Input name="translationUa"/>
                        </Form.Item>
                        <Form.Item className={"user-add-word-submit"}>
                            <Button htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            {/*<div>{message}</div>*/}
        </div>
    )
}
