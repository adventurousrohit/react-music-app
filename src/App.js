import './App.css';
import Header from './components/header';
import Searchinputs from './components/searchInputs';
import Tabs from './components/tabs';

function App() {
  return (
    <div className="App m-20">
    <Header/>
    <h2 className='mtb-20 app-quote'> find the best music</h2>
    <Searchinputs/>
    <Tabs/>
    </div>
  );
}

export default App;
