import {Link} from "react-router-dom";

export const Users = () => {
    return(
        <div className={"words-edition"}>
            <div><Link to={`/admin/users/all`}>All users</Link></div>
        </div>
    )
}
