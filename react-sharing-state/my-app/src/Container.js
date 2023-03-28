import React, { useState } from 'react';

export default function Container({ items }) {
  const [itemIndex, setItemIndex] = useState(0);
 function currentItem(index) {
    setItemIndex(index);
  }
  function setBackgroundColor(index) {
    setItemIndex(index)
  }

  return (
    <div>
      <div>{items[itemIndex]}</div>
      <div>
        <Button text="Prev" onClick={() => setBackgroundColor(((itemIndex - 1) + items.length) % items.length)} />
        <Buttons count={items.length} current={itemIndex} onClick={currentItem} />
        <Button text="Next" onClick={() => setBackgroundColor((itemIndex + 1) % items.length)} />
      </div>
    </div>
  );
}

function Button({ text, onClick, setBackgroundColor, backgroundColor }) {
  return <button onClick={onClick} style={{ backgroundColor }}>{text}</button>;
}

/**
 * An array of buttons with the active button highlighted blue.
 */
function Buttons({ count, onClick, current }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        text={i}
        onClick={() => onClick(i)}
        backgroundColor={i === current ? 'lightblue' : 'white'} />)
  }
  return <div>{buttons}</div>;
}
