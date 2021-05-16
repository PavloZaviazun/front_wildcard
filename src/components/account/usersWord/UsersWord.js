import "./UsersWord.css"
import {Button, Form, Input} from "antd";
import {commonService, userService} from "../../../services";
import {useEffect, useState} from "react";
import {
    SENTENCE_PATTERN, TRANSLATION_RU_PATTERN, TRANSLATION_UA_PATTERN,
    VALIDATION_SENTENCE_MESSAGE,
    VALIDATION_TRANSLATION_RU_MESSAGE, VALIDATION_TRANSLATION_UA_MESSAGE,
    VALIDATION_WORD_MESSAGE, WORD_PATTERN
} from "../../../util/Constants";

export const UsersWord = ({word, setFlag}) => {
    const [wordMessage, setWordMessage] = useState("");
    const [descriptionMessage, setDescriptionMessage] = useState("");
    const [exampleMessage, setExampleMessage] = useState("");
    const [translationRuMessage, setTranslationRuMessage] = useState("");
    const [translationUaMessage, setTranslationUaMessage] = useState("");

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
    const validationWord = () => {
        setWordMessage(VALIDATION_WORD_MESSAGE)
    }
    const validationDescription = () => {
        setDescriptionMessage(VALIDATION_SENTENCE_MESSAGE)
    }
    const validationExample = () => {
        setExampleMessage(VALIDATION_SENTENCE_MESSAGE)
    }
    const validationTranslationRu = () => {
        setTranslationRuMessage(VALIDATION_TRANSLATION_RU_MESSAGE)
    }
    const validationTranslationUa = () => {
        setTranslationUaMessage(VALIDATION_TRANSLATION_UA_MESSAGE)
    }

    return (
        <div className={"users-word"}>
            <div className={"user-add-word"}>
                <div className={"user-add-word-form"}>
                    <Form form={form} onFinish={handleWord} className={"tableForUsersWord"}
                          name={word === undefined ? `usersWordForm` : `usersWordForm${word.id}`}>
                        <Form.Item
                            className={"user-add-word-name"}
                            name="word">
                            <Input name="word" type={"text"}
                                   required={true} pattern={WORD_PATTERN} minLength={2} onInvalid={validationWord}/>
                        </Form.Item>
                        {wordMessage}
                        <Form.Item
                            className={"user-add-word-partOS"}
                            name="partOfSpeech">
                            <select name="partOfSpeech" value={"pa"}>
                                {partsOfSpeech.map(el => <option key={el} value={el}>{el}</option>)}
                            </select>
                        </Form.Item>
                        <Form.Item
                            className={"user-add-word-description"}
                            name="description">
                            <Input name="description" type={"text"}
                                   required={true} pattern={SENTENCE_PATTERN} minLength={2} onInvalid={validationDescription}/>
                        </Form.Item>
                        {descriptionMessage}
                        <Form.Item
                            className={"user-add-word-example"}
                            name="example">
                            <Input name="example" type={"text"}
                                   required={true} pattern={SENTENCE_PATTERN} minLength={2} onInvalid={validationExample}/>
                        </Form.Item>
                        {exampleMessage}
                        <Form.Item
                            className={"user-add-word-translationRu"}
                            name="translationRu">
                            <Input name="translationRu" type={"text"}
                                   pattern={TRANSLATION_RU_PATTERN} minLength={2} onInvalid={validationTranslationRu}/>
                        </Form.Item>
                        {translationRuMessage}
                        <Form.Item
                            className={"user-add-word-translationUa"}
                            name="translationUa">
                            <Input name="translationUa" type={"text"}
                                   pattern={TRANSLATION_UA_PATTERN} minLength={2} onInvalid={validationTranslationUa}/>
                        </Form.Item>
                        {translationUaMessage}
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
