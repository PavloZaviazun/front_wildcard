import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";

import {PageLayout} from "./layouts";
import {Home} from "./components/home";
import {Login} from "./components/login";
import {Registration} from "./components/registration";
import {Library} from "./components/library";
import store from "./redux";
import {Admin} from "./components/admin";
import {Body} from "./components/body";
import {AllWordsFromDB} from "./components/admin/words/AllWordsFromDB";
import {AddNewWord} from "./components/admin/words/addNewWord";
import {Redirect} from "react-router";
import {AddNewLibrary} from "./components/admin/libraries/addNewLibrary";
import {AllLibraries} from "./components/admin/libraries/allLibraries";
import {Profile} from "./components/account/profile";
import {FeedBack} from "./components/feedback";
import {NotApproved} from "./components/admin/words/notApproved/NotApproved";
import {Libraries} from "./components/admin/libraries";
import {AllUsers} from "./components/admin/users/allUsers";
import {Words} from "./components/admin/words";
import {Users} from "./components/admin/users/Users";
import {Account} from "./components/account";
import {CustomLib} from "./components/account/customLib";
import {MyWords} from "./components/account/myWords";
import {FavLibs} from "./components/account/favLibs";
import {ProtectedRoute} from "./ProtectedRoute";
import {Mode} from "./components/mode/Mode";

function App() {
    const admin = "ROLE_ADMIN";
    const user = "ROLE_USER";

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <PageLayout>
                        <Switch>
                            <Route exact path="/">
                                <Home child={<Body/>}/>
                            </Route>
                            <Route exact path="/library/:name">
                                <Home child={<Library/>}/>
                            </Route>
                            <Route exact path="/mode/:name">
                                <Home child={<Mode/>}/>
                            </Route>
                            <Route exact path="/feedback">
                                <FeedBack/>
                            </Route>
                            <ProtectedRoute exact path="/auth" roles={[]}
                                            child={<Redirect to={"/auth/login"}/>}/>
                            <ProtectedRoute exact path="/auth/login" roles={[]}
                                            child={<Login/>}/>
                            <ProtectedRoute exact path="/auth/registration" roles={[]}
                                            child={<Registration/>}/>
                            <ProtectedRoute exact path="/admin" roles={[admin]}
                                            child={<Admin/>}/>
                            <ProtectedRoute exact path="/account" roles={[admin, user]}
                                            child={<Account/>}/>
                            <ProtectedRoute exact path="/admin/libraries" roles={[admin]}
                                            child={<Admin child={<Libraries/>}/>}/>
                            <ProtectedRoute exact path="/admin/users" roles={[admin]}
                                            child={<Admin child={<Users/>}/>}/>
                            <ProtectedRoute exact path="/admin/words" roles={[admin]}
                                            child={<Admin child={<Words/>}/>}/>
                            <ProtectedRoute exact path="/admin/libraries/addnew" roles={[admin]}
                                            child={<Admin
                                                child={[<Libraries key={"lib"}/>, <AddNewLibrary key={"libadd"}/>]}/>}/>
                            <ProtectedRoute exact path="/admin/libraries/all" roles={[admin]}
                                            child={<Admin
                                                child={[<Libraries key={"lib"}/>, <AllLibraries key={"liball"}/>]}/>}/>
                            <ProtectedRoute exact path="/admin/words/addnew" roles={[admin]}
                                            child={<Admin
                                                child={[<Words key={"word"}/>, <AddNewWord key={"wordadd"}/>]}/>}/>
                            <ProtectedRoute exact path="/admin/words/all" roles={[admin]}
                                            child={<Admin
                                                child={[<Words key={"word"}/>, <AllWordsFromDB key={"wordall"}/>]}/>}/>
                            <ProtectedRoute exact path="/admin/words/notapproved" roles={[admin]}
                                            child={<Admin
                                                child={[<Words key={"word"}/>, <NotApproved key={"wordnot"}/>]}/>}/>
                            <ProtectedRoute exact path="/admin/users/all" roles={[admin]}
                                            child={<Admin
                                                child={[<Users key={"users"}/>, <AllUsers key={"usersall"}/>]}/>}/>
                            <ProtectedRoute exact path="/account/profile" roles={[admin, user]}
                                            child={<Account child={<Profile/>}/>}/>
                            <ProtectedRoute exact path="/account/customlib" roles={[admin, user]}
                                            child={<Account child={<CustomLib/>}/>}/>
                            <ProtectedRoute exact path="/account/mywords" roles={[admin, user]}
                                            child={<Account child={<MyWords/>}/>}/>
                            <ProtectedRoute exact path="/account/favlibs" roles={[admin, user]}
                                            child={<Account child={<FavLibs/>}/>}/>
                        </Switch>
                    </PageLayout>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
