import "./UsersWord.css"
import {Button, Form, Input} from "antd";
import {commonService, userService} from "../../../services";
import {useEffect, useState} from "react";

export const UsersWord = ({word, setFlag}) => {

    const [form] = Form.useForm();
    const [partsOfSpeech, setPartsOfSpeech] = useState([]);
    const translation1 = word === undefined ? {} : JSON.parse(word.translation);

    function loadForm() {
        form.setFieldsValue({
            word: word === undefined ? "" : word.word,
            partOfSpeech: word === undefined ? "" : word.partOfSpeech,
            description: word === undefined ? "" : word.description,
            example: word === undefined ? "" : word.example,
            translationRu: word === undefined ? "" : translation1.ru,
            translationUa: word === undefined ? "" : translation1.ua,
        })
    }


    useEffect(() => {
        commonService.getAllPartsOfSpeech().then(el => setPartsOfSpeech(el))
        loadForm();
    }, [])

    const handleWord = () => {
        if (word !== undefined) {
            const form = document.forms.namedItem(`usersWordForm${word.id}`);
            userService.updateWordInUserCustom(form, word.id).then(el => console.log(el))
        } else {
            const form = document.forms.namedItem(`usersWordForm`);
            userService.addNewWordToUserCustom(form).then(el => console.log(el))
        }
        setFlag(true);
        loadForm();
    }

    return (
        <div className={"users-word"}>
            <div className={"user-add-word"}>
                <div className={"user-add-word-form"}>
                    <Form form={form} onFinish={handleWord} className={"tableForUsersWord"}
                          name={word === undefined ? `usersWordForm` : `usersWordForm${word.id}`}>
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
