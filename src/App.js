import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import CounterWithStateBaseOldCode from './counterapp/CounterWithStateBaseOldCode';
import CounterWithStateAndProps from './counterapp/CounterWithStateAndProps';
import './counterapp/Counter.css';
import Finalcounter from './counterapp/FinalCounter';
import 'bootstrap/dist/css/bootstrap.css';
import ReactAppFirstComponent from './todo/ReactAppFirstComponent';

function App() {
  return (
    <div className="App">
      <header>
        <ReactAppFirstComponent/>
        {/** <FirstComponent></FirstComponent> */}
        {/** <CounterWithStateBaseOldCode></CounterWithStateBaseOldCode> */}
        {/** <Finalcounter></Finalcounter> */}
      </header>
    </div>
  );
}

export default App;
