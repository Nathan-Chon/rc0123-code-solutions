import { useState } from "react";
import './accordion.css';
import Topic from "./Topics.js";

export default function Accordion({data}) {
  const [isActive, setIsActive] = useState();
  const toggleActive = key => {
    setIsActive(isActive !== key ? key : null)
  }
  console.log(isActive);
return(
  <>
   {data && data.map((name, index) => (
    <Topic
      topic = {name}
      key ={name.name}
      onClick = {() => toggleActive(name.name)}
      isOpen={isActive === name.name}
    />
  ))}
  </>
  )

}
