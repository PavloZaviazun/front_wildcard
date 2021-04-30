import "./body.css"
import {CardComponent} from "../card";
import {AddNewWord} from "../admin/addNewWord";


export const Body = () => {

    return (
        <div className={"body-div"}>
            <div><CardComponent/> </div><br/>
            <div>Тут будет объяснение, как это работает</div>
            <AddNewWord/>
        </div>
    )
}
