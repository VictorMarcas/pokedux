import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  pokemonSearch: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails', 
  async (_, {dispatch}) => {
    // dispatch loader
    dispatch(setLoading(true));
    const pokemons = await getPokemon();
    const pokemonDetails = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));
    dispatch(setPokemons(pokemonDetails));
    dispatch(setLoading(false));
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
      state.pokemonSearch = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
      if(currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    searchPokemons: (state, action) => {
      const searchValue = action.payload;
      const filteredPokemons = state.pokemons.filter(pokemon => pokemon.name.includes(searchValue));
      state.pokemonSearch = filteredPokemons;
    }
  }
})

export const { setPokemons, setFavorite, searchPokemons } = dataSlice.actions;
export default dataSlice.reducer;