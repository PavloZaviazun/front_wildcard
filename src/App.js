import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Provider} from "react-redux";

import {PageLayout} from "./layouts";
import {Home} from "./components/home";
import {User} from "./components/user";
import {Login} from "./components/login";
import {Registration} from "./components/registration";
import {Library} from "./components/library";
import store from "./redux";
import {Admin} from "./components/admin";
import {Body} from "./components/body";
import {AllWordsFromDB} from "./components/admin/words/AllWordsFromDB";
import {AddNewWord} from "./components/admin/addNewWord";
import {Redirect} from "react-router";
import {AddNewLibrary} from "./components/admin/addNewLibrary";
import {AllLibraries} from "./components/admin/allLibraries";
import {Account} from "./components/account";
import {FeedBack} from "./components/feedback";
import {NotApproved} from "./components/admin/notApproved/NotApproved";

function App() {

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
                <Route exact path="/user/:id">
                  <User/>
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
                  <Admin child={<div/>}/>
                </Route>
                <Route exact path="/admin/allwords">
                  <Admin child={<AllWordsFromDB/>}/>
                </Route>
                <Route exact path="/admin/notapprovedwords">
                  <Admin child={<NotApproved/>}/>
                </Route>
                <Route exact path="/admin/addnewword">
                  <Admin child={<AddNewWord/>}/>
                </Route>
                <Route exact path="/admin/addnewlibrary">
                  <Admin child={<AddNewLibrary/>}/>
                </Route>
                <Route exact path="/admin/alllibraries">
                  <Admin child={<AllLibraries/>}/>
                </Route>
                <Route exact path="/account">
                  <Account/>
                </Route>
                <Route exact path="/feedback">
                  <FeedBack/>
                </Route>
              </Switch>
            </PageLayout>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
