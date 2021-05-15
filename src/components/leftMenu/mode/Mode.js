import "./Mode.css";
import {useEffect, useState} from "react";
import {wordService} from "../../../services";

export const Mode = () => {

    const [randomWords, setRandomWords] = useState([]);
    useEffect(() => {
        fetchWords();
    }, []);

    const fetchWords = async () => {
        const words = await wordService.getRandomWords();
        setRandomWords(words.data);
    }

    return(
        <div className={"mode-div"}>
            {randomWords && randomWords.map(el => el.word)}
        </div>
    )
}
