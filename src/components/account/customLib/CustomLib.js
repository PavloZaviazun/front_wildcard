import "./CustomLib.css";
import {useEffect, useState} from "react";
import {userService} from "../../../services";
import {CustomLibDetails} from "./customLibDetails";
import {Pagination} from "../../pagination";
import {useDispatch} from "react-redux";
import {setPagination} from "../../../redux";

export const CustomLib = () => {

    const [customLib, setCustomLib] = useState([]);
    const [wasUpdated, setWasUpdated] = useState(false);
    const currentPage = 1;
    const dispatch = useDispatch();
    useEffect(() => {
        fetchCustomLib(currentPage)
    }, [wasUpdated]);

    const fetchCustomLib = async (page) => {
        const data = await userService.getCustomLib(false, page);
        setCustomLib(data.pageList);
        dispatch(setPagination([page, data.pageCount]))
    }

    return (
        <div>
            {customLib.length > 0 && customLib.map(vocabulary => {
                return <CustomLibDetails
                    key={vocabulary.id}
                    word={vocabulary}
                    wasUpdated={wasUpdated}
                    setWasUpdated={setWasUpdated}
                />
            })}
            <div>
                <Pagination fetchCustomLib={fetchCustomLib}/>
            </div>
        </div>
    )
}
