import { useState } from "react";
import typeDescriptions from "../data/typeDescriptions";
import "./PokemonItem.css";

function PokemonItem({ pokemon }) {
  const [activeType, setActiveType] = useState(null);

  const backgroundColor = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    water: "#DEF3FD",
    electric: "#FCF7DE",
    poison: "#E0B0FF",
    normal: "#F5F5F5",
    flying: "#E6E6FA",
    bug: "#F8D5A3",
    rock: "#D5D5D4",
    ground: "#F4E7DA",
    ghost: "#DBBDEF",
    psychic: "#EAEDA1"
  }[pokemon.type[0]] || "#ffffff";

  return (
    <div className="pokemon-card" style={{ backgroundColor }}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>

      <div className="types">
        {pokemon.type.map((type, idx) => (
          <div
            key={idx}
            className="type-container"
            onClick={() => setActiveType(type === activeType ? null : type)}
          >
            <span className="type">{type}</span>
            {activeType === type && (
              <div className="type-description">
                {typeDescriptions[type] || "No description available."}
              </div>
            )}
          </div>
        ))}
      </div>

      <p>{pokemon.description}</p>
    </div>
  );
}

export default PokemonItem;
