import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const pokeUrl = "http://localhost:3001/pokemon";
let fullPokemonList = [];

function PokemonPage() {
  
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch(pokeUrl)
    .then(r => r.json())
    .then(pokemons => {
      fullPokemonList = [...pokemons];
      setAllPokemon(pokemons)
    });
  }, [])

  function filterPokeList(searchValue) {
    if(searchValue !== ""){
      console.log("Search value in page " + searchValue);
      const filteredAllPokemon = fullPokemonList.filter((pokemon) => (pokemon.name.indexOf(searchValue) === 0));
      console.log(filteredAllPokemon);
      setAllPokemon(filteredAllPokemon); 
    } else {
      setAllPokemon(fullPokemonList);
    } 
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search filterPokeList={filterPokeList}/>
      <br />
      <PokemonCollection allPokemon={allPokemon} />
    </Container>
  );
}

export default PokemonPage;


/*
APP
  Pokemon Page
      Pokemon Form
      Search
      Pokemon Collection
        Card
*/