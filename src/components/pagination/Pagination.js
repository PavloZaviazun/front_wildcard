import "./Pagination.css"
import {useSelector} from "react-redux";

export const Pagination = ({getWords}) => {

    const {pagination:{pagination}} = useSelector(el => el)
    let page = pagination[0];
    let pages = pagination[1];
    let back = "<<";
    let forward = ">>";

    return(
        pagination &&
        <div className={"pagination"}>
            {/*<button disabled={page === 1} onClick= {() => getWords(1)}>To first</button>*/}
            {/*<button disabled={page === 1} onClick= {() => page > 1 ? getWords(page - 1) : ""}> {back} </button>*/}
            {/*<div>Current page {page}</div>*/}
            {/*<button disabled={page === pages} onClick= {() => page < pages ? getWords(page + 1) : ""}> {forward} </button>*/}
            {/*<button disabled={page === pages} onClick= {() => getWords(pages)}>To last</button>*/}
        </div>
    )
}

export const PaginationSearch = ({fetchSearch}) => {

    const {pagination:{pagination} } = useSelector(el => el)
    let page = pagination[0];
    let pages = pagination[1];
    let word = pagination[2];
    let back = "<<";
    let forward = ">>";

    return(
        pagination &&
        <div className={"pagination"}>
            <button disabled={page === 1} onClick= {() => fetchSearch(word, 1)}>To first</button>
            <button disabled={page === 1} onClick= {() => page > 1 ? fetchSearch(word,page - 1) : ""}> {back} </button>
            <div>Current page {page}</div>
            <button disabled={page === pages} onClick= {() => page < pages ? fetchSearch(word,page + 1) : ""}> {forward} </button>
            <button disabled={page === pages} onClick= {() => fetchSearch(word, pages)}>To last</button>
        </div>
    )
}
