import "./pagelayout.css"
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const PageLayout = ({children}) => {

    return (

        <div className={"page-layout"}>
            <div className={"pl-header"}>
                <Header/>
            </div>
            <div className={"pl-child"}>
                {children}
            </div>
            <div className={"pl-footer"}>
                <Footer />
            </div>
        </div>
    )
}
