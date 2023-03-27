import { useState } from 'react';
import './Toggle.css';

export default function ToggleSwitch() {
  const [isClicked, notClicked] = useState(false);
  function handleClick() {
    notClicked(!isClicked)
  }
  if (isClicked) {
    return (
      <div>
        <input type="checkbox" id="switch"
          class="checkbox" onClick={handleClick}/>
        <label for="switch" class="toggle"/>
        <p>On</p>
      </div>
    );
  }
  return (
    <div>
      <input type="checkbox" id="switch"
        class="checkbox" onClick={handleClick}/>
      <label for="switch" class="toggle"/>
      <p>Off</p>
    </div>
  )
}
