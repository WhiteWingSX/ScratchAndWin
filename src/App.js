import logo from './logo.svg';
import './App.css';
import StateGame from './components/pure/stateGame';
import StateChange from './components/stateChange';
import QuestionRandom from './components/questionRandom';
import ImgRandom from './components/pure/ImgRandom';
import PatternOne from './components/pure/pattern1';

function App() {
  return (
    <div className="App">
      <StateGame></StateGame>
      {/* <StateChange></StateChange> */}
      {/* <QuestionRandom></QuestionRandom> */}
      {/* <ImgRandom></ImgRandom> */}
      {/* <PatternOne></PatternOne> */}
    </div>
  );
}

export default App;
