import "./AllLibraries.css"
import {libService, wordService} from "../../../../services";
import {UpdateWord} from "../../words/updateWord";
import {useCallback, useEffect, useState} from "react";
import {LibraryDetails} from "../libraryDetails";

export const AllLibraries = () => {

    const [libraries, setLibraries] = useState([]);
    const [words, setWords] = useState([]);
    const [flag, setFlag] = useState(false);

    const getLibraries = useCallback(async () => {
        const data = await libService.getLibs();
        setLibraries(data);
    }, [])

    useEffect(() => {
        getLibraries();
    }, [])

    const showWords = (id) => {
        wordService.getWordsFromLib(id, 0).then(el => {
            setWords(el.pageList);
        });
    }

    const doSearch = (e) => {
        e.preventDefault();
        const lib = e.target[0].value;
        libService.searchLib(lib).then(el => setLibraries(el));
    }

    const sortDesc = () => {
        const sorted = libraries.sort((el, el2) => new Date(el.updateDate).toUTCString() > new Date(el2.updateDate).toUTCString() ? 1 : -1)
        setLibraries(sorted);
        setFlag(!flag);
    }

    const sortAsc = () => {
        const sorted2 = libraries.sort((el, el2) => new Date(el2.updateDate).toUTCString() > new Date(el.updateDate).toUTCString() ? 1 : -1)
        setLibraries(sorted2);
        setFlag(!flag);
    }

    return (
        <div className={"pageForLibs"}>
            <div className={"pageForLibs-search"}>
                <form onSubmit={doSearch} className={"searchLib"}>
                    <input type={"search"}/>
                    <button>Search</button>
                </form>
            </div>
            <div>
                <button onClick={sortDesc}>Sort by update date desc</button>
                <button onClick={sortAsc}>Sort by update date asc</button>
            </div>
            <div className={"AllLibs"}>
                <div className={"divForAllLibraries"}>
                    {libraries.map(lib => {
                        return <LibraryDetails
                            key={lib.id}
                            showWords={showWords}
                            lib={lib}/>
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
