import React, { useState, useEffect } from 'react';
import { BsCircle } from 'react-icons/bs';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import './carousel.css';

export default function Carousel({ items }) {
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() =>{
    const myInterval = setInterval(() => {
      setItemIndex((prevTime) => (itemIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(myInterval);
  })

  function currentItem(index) {
    setItemIndex(index);
  }
  function setBackgroundColor(index) {
    setItemIndex(index)
  }



  return (
    <div>
      <div>
        <Left text="Prev" onClick={() => setBackgroundColor(((itemIndex - 1) + items.length) % items.length)} />
        <img src={items[itemIndex]} alt="none" className='picture'/>
        <Right text="Next" onClick={() => setBackgroundColor((itemIndex + 1) % items.length)} />
      </div>
      <div>
        <Buttons count={items.length} current={itemIndex} onClick={currentItem} />

      </div>
    </div>
  );
}

function Button({ onClick, setBackgroundColor, backgroundColor }) {
  return <BsCircle onClick={onClick} style={{ borderRadius: '50%', backgroundColor }} size={20} ></BsCircle>
}

function Right({ onClick, setBackgroundColor, backgroundColor }) {
  return <FaAngleRight onClick={onClick} style={{ backgroundColor }} size={40} className="right" ></FaAngleRight>
}

function Left({ onClick, setBackgroundColor, backgroundColor }) {
  return <FaAngleLeft onClick={onClick} style={{ backgroundColor }} size={40} className="left" ></FaAngleLeft>
}


function Buttons({ count, onClick, current }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        text={i}
        onClick={() => onClick(i)}
        backgroundColor={i === current ? 'black' : 'white'} />)
  }
  return <div>{buttons}</div>;
}


// clearInterval(timerId);
// timerId = setInterval(change, 3000);
// });
