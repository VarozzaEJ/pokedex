import { Pop } from "../utils/Pop.js";
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { AppState } from "../AppState.js";

export class SandboxPokemonsController {
  constructor() {}

  async catchActivePokemon(pokemonName) {
    try {
      await sandboxPokemonsService.catchActivePokemon(pokemonName);
    } catch (error) {
      Pop.error(error);
    }
  }
}
