import { useState } from 'react';
export default function RegistrationFormControlled() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('state:', {username: username, password: password})
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label> Username
        <input name="username" onChange={e => setUsername(e.target.value)}></input>
      </label>
      <label> Password
        <input name="password" onChange={e => setPassword(e.target.value)}></input>
      </label>
      <button type="submit">Submit form</button>
    </form>
  )
}
