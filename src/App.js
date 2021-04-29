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

function App() {

  return (
      <Provider store={store}>
        <Router>
          <div>
            <PageLayout>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/user/:id">
                  <User/>
                </Route>
                <Route exact path="/login">
                  <Login/>
                </Route>
                <Route exact path="/registration">
                  <Registration/>
                </Route>
                <Route exact path="/library/:name">
                  <Library/>
                </Route>
              </Switch>
            </PageLayout>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
