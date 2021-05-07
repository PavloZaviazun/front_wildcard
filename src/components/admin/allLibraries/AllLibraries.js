import "./AllLibraries.css"
import {useSelector} from "react-redux";

export const AllLibraries = () => {
    const {libraries: {libraries}} = useSelector(state => state);

    return (
        <div>
            {libraries.map(el => {
                return <div key={el.id}>
                    <div>{el.name}</div>
                    <div><button>Show all words</button></div>
                </div>
            })}
        </div>
    )
}
