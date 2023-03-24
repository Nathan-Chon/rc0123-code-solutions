import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, notClicked] = useState(false);
  function handleClick() {
    notClicked(!isClicked)
  }
    if (isClicked) {
      return <button style={{ backgroundColor: color }} onClick={handleClick} >{text}</button>;
    }
    return <button style={{ backgroundColor: 'white' }} onClick={handleClick} >{text}</button>;

}
