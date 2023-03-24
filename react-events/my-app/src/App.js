import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div><CustomButton text="I" info="red" onCustomClick={handleCustomClick} /><CustomButton text="know" info="green" onCustomClick={handleCustomClick} /><CustomButton text="React!" info="lightblue" onCustomClick={handleCustomClick} /> </div>
      </header>
    </div>
  );
}

export default App;

function handleCustomClick(text, info) {
  alert(`I clicked the ${info} ${text}` );
}
