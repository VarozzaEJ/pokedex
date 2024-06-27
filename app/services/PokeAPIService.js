import { Pop } from "../utils/Pop.js";
import { api, pokeApi } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
class PokeAPIService {
  constructor() {}

  async getWildPokemon() {
    const response = await pokeApi.get("");
    AppState.pokemonAPIPokemon = response.data.results;
    console.log(AppState.pokemonAPIPokemon);
  }

  async selectActivePokemon(pokemonName) {
    const response = await pokeApi.get(`/${pokemonName}`);
    const newPokemon = new Pokemon(response.data);
    console.log(newPokemon);
    AppState.activePokemon = newPokemon;
  }
}

export const pokeAPIService = new PokeAPIService();
