import Carousel from "./Carousel";
import './App.css'
const items = [
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
];

function App() {
  return (
    <div className="app">
      <div>
        <Carousel items={items}></Carousel>
      </div>
    </div>
  );
}

export default App;
