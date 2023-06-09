import axios from 'axios';
export const getPokemon = () => {
    return axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(res => { return res.data.results })
      .catch(err => {console.log(err)})
}

export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then(res => { return res.data })
    .catch(err => {console.log(err)})
}