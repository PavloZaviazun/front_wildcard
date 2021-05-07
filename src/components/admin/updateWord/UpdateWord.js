import "./UpdateWord.css";
import {libService, wordService} from "../../../services";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Input, Form, Button} from "antd";

export const UpdateWord = ({word, setUpdAllWords}) => {
    const [form] = Form.useForm();
    const {partsOfSpeech: {partsOfSpeech}} = useSelector(state => state);
    const {libraries: {libraries}} = useSelector(state => state);
    const {words: {words}} = useSelector(state => state);
    const [notAddedToLibs, setNotAddedToLibs] = useState([]);
    const [notPartsOfSpeechOfWord, setNotPartsOfSpeechOfWord] = useState([]);
    const [updWord, setUpdWord] = useState(false);
    const [currentWord, setCurrentWord] = useState({
        approved: word.approved,
        description: word.description,
        example: word.example,
        id: word.id,
        image: word.image,
        partOfSpeech: word.partOfSpeech,
        translation: word.translation,
        word: word.word
    });
    const [translation1, setTranslation1] = useState(JSON.parse(currentWord.translation));

    function loadForm() {

        form.setFieldsValue({word: currentWord.word,
            partOfSpeech: currentWord.partOfSpeech,
            description: currentWord.description,
            example: currentWord.example,
            translationRu: translation1.ru,
            translationUa: translation1.ua,
            notAddedToLibs: ""})
    }

    const getLibsOfWord = async () => {
        return await libService.getLibsOfWord(word.id).then(el => el);
    }

    const getNotLibsOfWord = () => {
        const promise = getLibsOfWord();
        promise.then(value => {
            const nonAddedLi = libraries.filter(el => !value.find(el2 => el.id === el2.id));
            setNotAddedToLibs(nonAddedLi);
        });
    }

    const getPartsOfSpeechOfWord = async () => {
        return await wordService.getPartsOfSpeech(word.word).then(el => el.data)
    }

    const getNotPartsOfSpeechOfWord = () => {
        const promise = getPartsOfSpeechOfWord();
        promise.then(value => {
            const nonParts = partsOfSpeech.filter(el => !value.find(el2 => el === el2));
            setNotPartsOfSpeechOfWord(nonParts);
        });
    }

    const getCurrentWord = async () => {
        await wordService.getWord(word.id).then(el => {
            setCurrentWord(el.data);
            setUpdWord(!updWord);
            setTranslation1(JSON.parse(el.data.translation))
        });
    }

    useEffect(() => {
        getNotLibsOfWord();
        getNotPartsOfSpeechOfWord();
        loadForm();
    }, [updWord, words, translation1]);

    const updateWord = values => {
        const newWord = values.word;
        const partOfSpeech = values.partOfSpeech;
        const description = values.description;
        const example = values.example;
        const translationRu = values.translationRu;
        const translationUa = values.translationUa;

        wordService.updateWord(currentWord.id, newWord, partOfSpeech, description, example, "", {
            "ru": translationRu,
            "ua": translationUa
        }).then(el => {
            getCurrentWord();
            if (partOfSpeech !== currentWord.partOfSpeech){
                setUpdAllWords(true)
            }
        });

        const newLib = values.NotAddedToLibs;
        if (newLib != null) {
            const Lib = notAddedToLibs.filter(el => el.name === newLib);
            libService.addToLibExistingWord(Lib[0].id, word.id);
            getNotLibsOfWord();
        }
    }

    const deleteWord = () => {
        wordService.deleteWord(word.id).then(el => {
            setUpdAllWords(true)
        });
    }

    return (
        <div className={"updateForm"}>
            <div className={"updateform-form"}>
                <Form form={form} onFinish={updateWord} className={"tableForUpdate"}>
                    <Form.Item
                        className={"tableForUpdate-name"}
                        name='word'
                        rules={[{
                                message: 'Please input word!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        className={"tableForUpdate-partOS"}
                        name='partOfSpeech'
                        rules={[{
                                message: 'Please input partOfSpeech!',
                            },]}>
                        <select>
                            <option value={currentWord.partOfSpeech}>{currentWord.partOfSpeech}</option>
                            {notPartsOfSpeechOfWord.map(el => <option key={el} value={el}>{el}</option>)}
                        </select>
                    </Form.Item>
                    <Form.Item
                        className={"tableForUpdate-description"}
                        name='description'
                        rules={[{
                                message: 'Please input description!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        className={"tableForUpdate-example"}
                        name='example'
                        rules={[{
                                // required: true,
                                message: 'Please input example!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        className={"tableForUpdate-translationRu"}
                        name='translationRu'
                        rules={[{
                                message: 'Please input translationRU!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        className={"tableForUpdate-translationUa"}
                        name='translationUa'
                        rules={[{
                                message: 'Please input translationUA!',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        className={"tableForUpdate-notAddedLibs"}
                        name='NotAddedToLibs'
                        rules={[{
                                message: 'Please input NotAddedToLibs!',
                            },]}>
                        <select name={"NotAddedToLibs"}>
                            <option value={""}/>
                            {notAddedToLibs.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}
                        </select>
                    </Form.Item>
                    <Form.Item className={"tableForUpdate-submit"}>

                        <Button htmlType="submit">Submit</Button>
                    </Form.Item>
                    <div className={"tableForUpdate-delete ant-row ant-form-item"}>
                        <button onClick={deleteWord}>Delete</button>
                    </div>
                </Form>
            </div>

        </div>
    )
}
