import "./UpdateWord.css";
import {libService, wordService} from "../../../services";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Input, Form, Button, Select} from "antd";
import {Login} from "../../login";

export const UpdateWord = ({word, setUpdAllWords}) => {
    const [form] = Form.useForm();
    console.log("hyu")
    const {partsOfSpeech: {partsOfSpeech}} = useSelector(state => state);
    const {libraries: {libraries}} = useSelector(state => state);
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

    const getLibsOfWord = async () => {
        return await libService.getLibsOfWord(word.id).then(el => el);
    }

    const getNotLibsOfWord = () => {
        const promise = getLibsOfWord();
        Promise.all([promise]).then(value => {
            const nonAddedLi = libraries.filter(el => !value[0].find(el2 => el.id === el2.id));
            setNotAddedToLibs(nonAddedLi);
        });
    }

    const getPartsOfSpeechOfWord = async () => {
        return await wordService.getPartsOfSpeech(word.word).then(el => el.data)
    }

    const getNotPartsOfSpeechOfWord = () => {
        const promise = getPartsOfSpeechOfWord();
        Promise.all([promise]).then(value => {
            const nonParts = partsOfSpeech.filter(el => !value[0].find(el2 => el === el2));
            setNotPartsOfSpeechOfWord(nonParts);
        });
    }

    const getCurrentWord = async () => {
        await wordService.getWord(word.id).then(el => {
            setCurrentWord(el.data);
            setUpdWord(!updWord)
        });
    }

    function loadForm() {
        form.setFieldsValue({word: currentWord.word,
            partOfSpeech: currentWord.partOfSpeech,
            description: currentWord.description,
        example: currentWord.example,
        translationRU: translation1.ru,
        translationUA: translation1.ua,
        notAddedToLibs: ""})
    }

    useEffect(() => {
        getNotLibsOfWord();
        getNotPartsOfSpeechOfWord();
        setTimeout(() => {}, 500)
        loadForm()
    }, [updWord]);

    const updateWordNew = values => {

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
                //TODO апдейт списка частей речи одинаковых слов
            }
        });



        const newLib = values.NotAddedToLibs;
        if (newLib != null) {
            const Lib = notAddedToLibs.filter(el => el.name === newLib);
            libService.addToLibExistingWord(Lib[0].id, word.id);
            getNotLibsOfWord();
        }
    }

    const updateWord = (e) => {
        e.preventDefault();
        const newWord = e.target[0].value;
        const partOfSpeech = e.target[1].value;
        const description = e.target[2].value;
        const example = e.target[3].value;
        const translationRu = e.target[4].value;
        const translationUa = e.target[5].value;

        wordService.updateWord(word.id, newWord, partOfSpeech, description, example, "", {
            "ru": translationRu,
            "ua": translationUa
        }).then(el => setUpdWord(!updWord));

        const newLib = e.target[6].value;
        if (newLib.length > 0) {
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
            {/*<div>*/}
            {/*    <form onSubmit={updateWord} className={"tableForUpdate"} id={currentWord.id}>*/}
            {/*        <input name={"word"} type={'text'} defaultValue={currentWord.word}/>*/}
            {/*        <select name={"partOfSpeech"}>*/}
            {/*            <option value={currentWord.partOfSpeech}>{currentWord.partOfSpeech}</option>*/}
            {/*            {notPartsOfSpeechOfWord.map(el => <option key={el} value={el}>{el}</option>)}*/}
            {/*        </select>*/}
            {/*        <input name={"Description"} type={'text'} onChange={handleChange} value={aba}/>*/}

            {/*        <input name={"Example"} type={'text'} defaultValue={currentWord.example}/>*/}
            {/*        <input name={"Translation ru"} type={'text'} defaultValue={translation1.ru}/>*/}
            {/*        <input name={"Translation ua"} type={'text'} defaultValue={translation1.ua}/>*/}
            {/*        <select name={"NotAddedToLibs"}>*/}
            {/*            <option value={""}/>*/}
            {/*            {notAddedToLibs.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}*/}
            {/*        </select>*/}
            {/*        <button>Submit</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
            <div>
                <Form form={form} onFinish={updateWordNew} className={"tableForUpdate"}>
                    <Form.Item
                        name='word'
                        rules={[{
                                message: 'Please input word!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name='partOfSpeech'
                        rules={[{
                                message: 'Please input partOfSpeech!',
                            },]}>
                        <select style={{ width: 100 }}>
                            <option value={currentWord.partOfSpeech}>{currentWord.partOfSpeech}</option>
                            {notPartsOfSpeechOfWord.map(el => <option key={el} value={el}>{el}</option>)}
                        </select>
                    </Form.Item>
                    <Form.Item
                        name='description'
                        rules={[{
                                message: 'Please input description!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name='example'
                        rules={[{
                                // required: true,
                                message: 'Please input example!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name='translationRU'
                        rules={[{
                                message: 'Please input translationRU!',
                            },]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name='translationUA'
                        rules={[{
                                message: 'Please input translationUA!',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name='NotAddedToLibs'
                        rules={[{
                                message: 'Please input NotAddedToLibs!',
                            },]}>
                        <select name={"NotAddedToLibs"} style={{ width: 100 }}>
                            <option value={""}/>
                            {notAddedToLibs.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}
                        </select>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <button onClick={deleteWord}>Delete word</button>
            </div>
        </div>
    )
}
