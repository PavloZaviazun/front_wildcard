import './App.css';
import {vocabularyService} from "./services";
import {useState, useEffect} from "react";

function App() {

  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    vocabularyService.getVocabulary().then(el => {
      setVocabulary(el)
    })
  }, []);



  return (
    <div className="App">
      {vocabulary && vocabulary.map(el => {
       return <div key={el.id}>{el.word} + {el.part_of_speech} + {el.description} + {el.example} + {el.translation}</div>
      })}
    </div>
  );
}

export default App;
