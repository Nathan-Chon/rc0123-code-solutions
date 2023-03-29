export default function Topic({ topic, isOpen, onClick }) {
  return (
    <div className="topic">
      <div onClick={() => onClick(topic)} className="titles">
      <h3>{topic.name}</h3>
    </div>
      {
    isOpen &&
        <div className="description">
      {topic.descrip}
    </div>
  }
    </div >
  );
}
