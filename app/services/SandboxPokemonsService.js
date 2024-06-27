import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js";

class SandboxPokemonsService {
  async catchActivePokemon(pokemonName) {
    const pokemonToSave = AppState.activePokemon;

    const response = await api.post("api/pokemon", pokemonToSave);

    console.log("created pokemon", response.data);
  }

  async getMySPokemon() {
    const response = await api.get("api/pokemon");

    const newPokemon = response.data.map((pokePOJO) => new Pokemon(pokePOJO));
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService();
