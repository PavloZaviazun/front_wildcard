import "./FavLibs.css"
import {useEffect, useState} from "react";
import {userService} from "../../../services";
import {CustomLibDetails} from "../customLib/customLibDetails";
import {FavLibDetails} from "./favLibDetails";

export const FavLibs = () => {

    const [favLibs, setFavLibs] = useState(null);
    const [favLibAction, setFavLibAction] = useState(false);

    useEffect(() => {
        fetchFavLibs()
    }, [favLibAction]);

    const fetchFavLibs = async () => {
        const data = await userService.getFavLibs();
        setFavLibs(data);
        setFavLibAction(false);
    }

    return(
        <div>
            {favLibs && favLibs.data.map(favLib => {
                return <FavLibDetails
                    key={favLib.id}
                    favLib={favLib}
                    setFavLibAction={setFavLibAction}
                />
            })}
        </div>
    )
}
