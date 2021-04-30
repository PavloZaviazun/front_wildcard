import "./home.css"
import {LeftMenu} from "../leftMenu";
import {Body} from "../body";
import {libService} from "../../services";
import {setLibrary} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";

export const Home = () => {
    const {library: {library}} = useSelector(state => state);

    const dispatch = useDispatch();

    const getLibraries = useCallback(async () => {
        const data = await libService.getLibs();
        dispatch(setLibrary(data));
    }, [])

    useEffect(() => {
        getLibraries();
    }, [])

    return (
        <div className={"home-div"}>
            <div className={"for-leftmenu"}>
                <LeftMenu/>
            </div>
            <div className={"for-body"}>
                <Body/>
            </div>
        </div>
    )
}
