import './App.css';
import ToggleButton from './ToggleButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><ToggleButton text="Btn 1" color="red"/><ToggleButton text="Btn 2" color="green" /><ToggleButton text="Btn 3" color="blue" /> </div>
      </header>
    </div>
  );
}

export default App;
