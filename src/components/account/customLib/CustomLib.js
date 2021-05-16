import "./CustomLib.css";
import {useEffect, useState} from "react";
import {userService} from "../../../services";
import {CustomLibDetails} from "./customLibDetails";

export const CustomLib = () => {

    const [customLib, setCustomLib] = useState(null);

    useEffect(() => {
        fetchCustomLib()
    }, []);

    const fetchCustomLib = async () => {
        const data = await userService.getCustomLib();
        setCustomLib(data);
    }

    return (
        <div>
            {customLib && customLib.data.map(vocabulary => {
                return <CustomLibDetails
                    key={vocabulary.id}
                    word={vocabulary}
                />
            })}
        </div>
    )
}
