import "./Pagination.css"
import {useSelector} from "react-redux";
import {get} from "react-hook-form";

// export const Pagination = ({getWords}) => {
//     const {pagination:{pagination}} = useSelector(el => el)
//     let page = pagination[0];
//     let pages = pagination[1];
//     let back = "<<";
//     let forward = ">>";
//
//     return(
//         pagination &&
//         <div className={"pagination"}>
//             <button disabled={page === 1} onClick= {() => getWords(1)}>To first</button>
//             <button disabled={page === 1} onClick= {() => page > 1 ? getWords(page - 1) : ""}> {back} </button>
//             <div>Current page {page}</div>
//             <button disabled={page === pages} onClick= {() => page < pages ? getWords(page + 1) : ""}> {forward} </button>
//             <button disabled={page === pages} onClick= {() => getWords(pages)}>To last</button>
//         </div>
//     )
// }

export const Pagination = (props) => {
    const {getWords, getUsersPage, fetchCustomLib} = props;
    let fun;
    if(getWords != null) fun = getWords
    else if(getUsersPage != null) fun = getUsersPage
    else if(fetchCustomLib != null) fun = fetchCustomLib
    const {pagination:{pagination}} = useSelector(el => el)

    let page = pagination[0];
    let pages = pagination[1];
    let back = "<<";
    let forward = ">>";

    return(
        pagination &&
        <div className={"pagination"}>
            <button disabled={page === 1} onClick= {() => fun(1)}>To first</button>
            <button disabled={page === 1} onClick= {() => page > 1 ? fun(page - 1) : ""}> {back} </button>
            <div>Current page {page}</div>
            <button disabled={page === pages} onClick= {() => page < pages ? fun(page + 1) : ""}> {forward} </button>
            <button disabled={page === pages} onClick= {() => fun(pages)}>To last</button>
        </div>
    )
}

export const PaginationWordsInLibsAdmin = ({libId, showWords}) => {

    const {pagination:{pagination} } = useSelector(el => el)
    let page = pagination[0];
    let pages = pagination[1];
    let back = "<<";
    let forward = ">>";

    return(
        pagination &&
        <div className={"pagination"}>
            <button disabled={page === 1} onClick= {() => showWords(libId, 1)}>To first</button>
            <button disabled={page === 1} onClick= {() => page > 1 ? showWords(libId, page - 1) : ""}> {back} </button>
            <div>Current page {page}</div>
            <button disabled={page === pages} onClick= {() => page < pages ? showWords(libId, page + 1) : ""}> {forward} </button>
            <button disabled={page === pages} onClick= {() => showWords(libId, pages)}>To last</button>
        </div>
    )
}

export const PaginationLibs = ({getLibrariesWithPages}) => {

    const {libsPagination:{libsPagination} } = useSelector(el => el)
    let page = libsPagination[0];
    let pages = libsPagination[1];
    let back = "<<";
    let forward = ">>";

    return(
        libsPagination &&
        <div className={"pagination"}>
            <button disabled={page === 1} onClick= {() => getLibrariesWithPages(1)}>To first</button>
            <button disabled={page === 1} onClick= {() => page > 1 ? getLibrariesWithPages(page - 1) : ""}> {back} </button>
            <div>Current page {page}</div>
            <button disabled={page === pages} onClick= {() => page < pages ? getLibrariesWithPages(page + 1) : ""}> {forward} </button>
            <button disabled={page === pages} onClick= {() => getLibrariesWithPages(pages)}>To last</button>
        </div>
    )
}
