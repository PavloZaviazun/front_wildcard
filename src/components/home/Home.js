import "./Home.css"
import {LeftMenu} from "../leftMenu";
import {libService} from "../../services";
import {setLibraries, setWords} from "../../redux";
import {useDispatch} from "react-redux";
import {useCallback, useEffect} from "react";
import {withRouter} from "react-router-dom";

export const Home = ({child}) => {

    const dispatch = useDispatch();

    const getLibraries = useCallback(async () => {
        const data = await libService.getLibs();
        dispatch(setLibraries(data));
    }, [])

    useEffect(() => {
        getLibraries();
        dispatch(setWords([]))
    }, [])

    return (
        <div className={"home-div"}>
            <div className={"for-leftmenu"}>
                <LeftMenu/>
            </div>
            <div className={"for-body"}>
                {child}
            </div>
        </div>
    )
}

withRouter(Home)
