import RegistrationFormUncontrolled from './RegistrationFormUncontrolled.js'
import RegistrationFormControlled from './RegistrationFormControlled.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontWeight: 'bold' }}>Uncontrolled</div>
        <RegistrationFormUncontrolled></RegistrationFormUncontrolled>
        <div style={{fontWeight: 'bold'}}>Controlled</div>
        <RegistrationFormControlled></RegistrationFormControlled>
      </header>
    </div>
  );
}

export default App;
