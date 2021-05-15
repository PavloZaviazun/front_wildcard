import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
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

function App() {

  return (
      <Provider store={store}>
        <Router>
          <div>
            <PageLayout>
              <Switch>
                {/*<ProtectedRoute exact path="/">*/}
                {/*  <Home child={<Body/>}/>*/}
                {/*</ProtectedRoute>*/}
                <Route exact path="/">
                  <Home child={<Body/>}/>
                </Route>
                <Route exact path="/library/:name">
                  <Home child={<Library/>}/>
                </Route>
                <Route exact path="/auth" >
                  <Redirect to={"/auth/login"}/>
                </Route>
                <Route exact path="/auth/login">
                  <Login/>
                </Route>
                <Route exact path="/auth/registration">
                  <Registration/>
                </Route>
                <Route exact path="/admin">
                  <Admin/>
                </Route>
                <Route exact path="/account">
                  <Account/>
                </Route>
                <Route exact path="/feedback">
                  <FeedBack/>
                </Route>
                <Route exact path="/admin/libraries">
                  <Admin child={<Libraries/>}/>
                </Route>
                <Route exact path="/admin/users">
                  <Admin child={<Users/>}/>
                </Route>
                <Route exact path="/admin/words">
                  <Admin child={<Words/>}/>
                </Route>
                <Route exact path="/admin/libraries/addnew">
                  <Admin child={[<Libraries key={"lib"}/>, <AddNewLibrary key={"libadd"}/>]}/>
                </Route>
                <Route exact path="/admin/libraries/all">
                  <Admin child={[<Libraries key={"lib"}/>, <AllLibraries key={"liball"}/>]}/>
                </Route>
                <Route exact path="/admin/words/addnew">
                  <Admin child={[<Words key={"word"}/>, <AddNewWord key={"wordadd"}/>]}/>
                </Route>
                <Route exact path="/admin/words/all">
                  <Admin child={[<Words key={"word"}/>, <AllWordsFromDB key={"wordall"}/>]}/>
                </Route>
                <Route exact path="/admin/words/notapproved">
                  <Admin child={[<Words key={"word"}/>, <NotApproved key={"wordnot"}/>]}/>
                </Route>
                <Route exact path="/admin/users/all">
                  <Admin child={[<Users key={"users"}/>, <AllUsers key={"usersall"}/>]}/>
                </Route>
                <Route exact path="/account/profile">
                  <Account child={<Profile/>}/>
                </Route>
                <Route exact path="/account/customlib">
                  <Account child={<CustomLib/>}/>
                </Route>
                <Route exact path="/account/mywords">
                  <Account child={<MyWords/>}/>
                </Route>
                <Route exact path="/account/favlibs">
                  <Account child={<FavLibs/>}/>
                </Route>
              </Switch>
            </PageLayout>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
