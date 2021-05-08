import "./AllLibraries.css"
import {useDispatch, useSelector} from "react-redux";
import {libService, wordService} from "../../../services";
import {setLibraries, setWords} from "../../../redux";
import {UpdateWord} from "../updateWord";

export const AllLibraries = () => {
    const {libraries: {libraries}} = useSelector(state => state);
    const {words: {words}} = useSelector(state => state);
    const dispatch = useDispatch();

    const showWords = (id) => {
        wordService.getWordsFromLib(id, 0).then(el => {
            dispatch(setWords(el.pageList))
        });
    }

    const doSearch = (e) => {
        e.preventDefault();
        const lib = e.target[0].value;
        libService.searchLib(lib).then(el => dispatch(setLibraries(el)));
    }

    return (
        <div className={"pageForLibs"}>
            <div className={"pageForLibs-search"}>
                <form onSubmit={doSearch} className={"searchLib"}>
                    <input type={"search"}/>
                    <button>Search</button>
                </form>
            </div>
            <div className={"AllLibs"}>

                <div className={"divForAllLibraries"}>
                    {libraries.map(el => {
                        return <div className={"div-for-OneLib"} key={el.name}>
                            <button onClick={() => showWords(el.id)}>{el.name}</button>
                        </div>
                    })}
                </div>
                <div className={"allWordsHereTable"}>
                    <div className={"div-head-for-words"}>
                        <div className={"div-head-for-words-name"}>Word</div>
                        <div className={"div-head-for-words-partOS"}>Part of speech</div>
                        <div className={"div-head-for-words-description"}>Description</div>
                        <div className={"div-head-for-words-example"}>Example</div>
                        <div className={"div-head-for-words-translationRu"}>Translation RU</div>
                        <div className={"div-head-for-words-translationUa"}>Translation UA</div>
                        <div className={"div-head-for-words-addtoLib"}>Add to library</div>
                        <div className={"div-head-for-words-submit"}>Submit</div>
                        <div className={"div-head-for-words-delete"}>Delete</div>
                    </div>
                    {words.map(word => {
                        return <div key={word.id} className={"div-for-table"}>
                            <UpdateWord word={word}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
