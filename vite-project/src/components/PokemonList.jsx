import { useEffect, useState } from "react";
import "./PokemonList.css";
import PokemonItem from "./PokemonItem";
import data from "../data/pokemon.json";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPokemons(data);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(search)
  );

  return (
    <div className="container">
      <h1>Pokémon List</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={handleSearch}
        className="search"
      />
      <div className="list-pokemon">
        {filtered.length > 0 ? (
          filtered.map(pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className="not-found">Pokémon tidak ditemukan</p>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
