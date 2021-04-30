import "./body.css"
import {CardComponent} from "../card";
import {useDispatch} from "react-redux";
import {setVocabulary} from "../../redux";
import {UpdateWord} from "../updateWord";


export const Body = () => {
    const dispatch = useDispatch();
    dispatch(setVocabulary([]));



    return (

        <div className={"body-div"}>
            <CardComponent/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at dolore doloremque est facere fuga
            incidunt labore maiores minima minus natus nulla numquam obcaecati quia rerum sunt suscipit, voluptas
            voluptatum!
<UpdateWord/>

        </div>
    )
}
