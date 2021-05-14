import "./FavLibDetails.css";
import {Link} from "react-router-dom";
import {userService} from "../../../../services";
import {useEffect} from "react";

export const FavLibDetails = ({favLib:{id, name}, setFavLibAction}) => {

    const handleFavLib = () => {
        userService.deleteFavLib(id)
            .then(el => setFavLibAction(true))
    }

    return(
        <div className={"fav-lib-details-div"}>
            <Link to={`/library/${name}`}>{name}</Link>
            <div onClick={handleFavLib}>----</div>
        </div>
    )
}
