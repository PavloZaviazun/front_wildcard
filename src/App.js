import './App.css';
import {vocabularyService} from "./services";
import {useState, useEffect} from "react";
import {CardComponent} from "./components/card";

function App() {

  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    vocabularyService.getVocabulary().then(el => {
      setVocabulary(el)
    })
  }, []);



  return (
    <div className="App">
      <br/>
      {vocabulary && vocabulary.map(el => {
       return <div key={el.id}>{el.word} + {el.part_of_speech} + {el.description} + {el.example} + {el.translation}</div>
      })}
      <CardComponent/>
    </div>
  );
}

export default App;
