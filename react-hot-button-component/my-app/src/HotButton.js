import { useState } from 'react';

export default function HotButton() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1 );
    console.log('count', index);
  }


  if (index <= 3) {
    return <button style={{ backgroundColor: '#351C75' }} onClick={handleClick} >Hot Button</button>;
  } else if (index <= 6) {
    return <button style={{ backgroundColor: '#674EA7' }} onClick={handleClick} >Hot Button</button>;
  } else if (index <= 9) {
    return <button style={{ backgroundColor: '#E06666' }} onClick={handleClick} >Hot Button</button>;
  } else if (index <= 12) {
    return <button style={{ backgroundColor: '#F6B26B' }} onClick={handleClick} >Hot Button</button>;
  } else if (index <= 15) {
    return <button style={{ backgroundColor: '#FFFF00' }} onClick={handleClick} >Hot Button</button>;
  } else if (index <= 18 ) {
    return <button style={{ backgroundColor: '#FFFFFF' }} onClick={handleClick} >Hot Button</button>;
  } else if (index > 18) {
    return <button style={{ backgroundColor: '#FFFFFF' }} onClick={handleClick} >You broke it!</button>;
  }
}
