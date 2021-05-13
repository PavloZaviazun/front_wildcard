import "./UsersWord.css"
import {Button, Checkbox, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {commonService} from "../../../services";
import {setPartsOfSpeech} from "../../../redux";

export const UsersWord = () => {
    const [form] = Form.useForm();
    const {partsOfSpeech: {partsOfSpeech}} = useSelector(state => state);
    const dispatch = useDispatch();

    commonService.getAllPartsOfSpeech().then(el => dispatch(setPartsOfSpeech(el)));


    const addUsersWord = () => {

    }

    return (
        <div>
            <div className={"user-add-word"}>
                <div className={"user-add-word-form"}>
                    <Form form={form} onFinish={addUsersWord} className={"tableForUsersWord"} name={`usersWordForm`}>
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
                            <select name="partOfSpeech">
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
            <div>{message}</div>
        </div>
    )
}
