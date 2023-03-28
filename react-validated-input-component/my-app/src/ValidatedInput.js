import { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (password.length <= 0) {
    return (
      <form method="post" onSubmit={handleSubmit} style={{margin: '50px'}}>
        <p>Password</p>
        <label>
          <input name="password" type="password" onChange={e => setPassword(e.target.value)}></input> <HiXMark style={{ color: 'red', padding: '0px 0 0 5px' }} />
        </label>
        <p style={{ color: 'red'}}>A password is required.</p>
      </form>
    )
  } else if (password.length < 8) {
    return (
      <form method="post" onSubmit={handleSubmit} style={{ margin: '50px' }}>
        <p>Password</p>
        <label>
          <input name="password" type="password" onChange={e => setPassword(e.target.value)}></input> <HiXMark style={{ color: 'red', padding: '0px 0 0 5px' }}/>
        </label>
        <p style={{ color: 'red' }}>Your password is too short.</p>
      </form>
    )
  } else if (password.length >= 8) {
    return (
      <form method="post" onSubmit={handleSubmit} style={{ margin: '50px' }}>
        <p>Password</p>
        <label>
          <input name="password" type="password" onChange={e => setPassword(e.target.value)}></input>
        </label>
        <FaCheck style={{ color: 'green', padding: '0px 0 0 5px' }} />
      </form>
    )
  }


}
