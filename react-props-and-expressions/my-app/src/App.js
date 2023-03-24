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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton text="I" info="red" /><CustomButton text="know" info="green" /><CustomButton text="React!" info="lightblue" />
        </a>
      </header>
    </div>
  );
}

export default App;
