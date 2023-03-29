import Accordion from "./Accordion";

export const data = [
  {
    name: 'Hypertext Markup Language',
    descrip: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applicaitons.With Cascading Style Sheets &rpar; CSS&rpar; and JavaScript, it forms a triad of cornerstone technologies for the Wrold Wide Web.'
  },
  {
    name: 'Cascading Style Sheets',
    descrip: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    name: 'JavaScript',
    descrip: 'JavaScript, often abbreviated to JS, is a high-level, interpreted programing language that confroms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.'
  }
]

function App() {
  return (
    <div>
      <Accordion data={data}></Accordion>
    </div>
  );
}

export default App;
