export default function CustomButton({ text, info, onCustomClick }) {
  return (
    <button style={{ backgroundColor: info }} onClick={()=> onCustomClick(text, info)}>{text}</button>
  )

}
