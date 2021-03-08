import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./redux";
import {PageLayout} from "./layouts/PageLayout";
import {Home} from "./components/Home";
import {User} from "./components/User";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";

function App() {
    //
    // const [vocabulary, setVocabulary] = useState([]);
    //
    // useEffect(() => {
    //     vocabularyService.getVocabulary().then(el => {
    //         setVocabulary(el)
    //     })
    // }, []);


    return (
        // <div className="App">
        //   {vocabulary && vocabulary.map(el => {
        //    return <div key={el.id}>{el.word} + {el.part_of_speech} + {el.description} + {el.example} + {el.translation}</div>
        //   })}
        // </div>
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
                        </Switch>
                    </PageLayout>
                </div>
            </Router>
        </Provider>

    );
}

export default App;
