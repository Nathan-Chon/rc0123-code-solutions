export default function PokemonList({event}) {
  const listItems = event.map(poke => {
    return <li key={poke.number}>{poke.name}</li>
});
  return <ul>{listItems}</ul>;
}
