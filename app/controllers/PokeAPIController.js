import { AppState } from "../AppState.js";
import { pokeAPIService } from "../services/PokeAPIService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokeAPIController {
  constructor() {
    AppState.on("activePokemon", this.drawActivePokemon);
    AppState.on("pokemonAPIPokemon", this.drawWildPokemon);
    this.getWildPokemon();
  }

  async getWildPokemon() {
    try {
      await pokeAPIService.getWildPokemon();
    } catch (error) {
      Pop.error(error);
    }
  }
  async selectActivePokemon(pokemonName) {
    try {
      console.log("pokemonName", pokemonName);
      await pokeAPIService.selectActivePokemon(pokemonName);
    } catch (error) {
      Pop.error(error);
      console.log("Error Selecting the Pokemon with the right name");
    }
  }

  drawWildPokemon() {
    const wildPokemon = AppState.pokemonAPIPokemon;
    let innerHTMLString = "";
    wildPokemon.forEach(
      (pokemon) =>
        (innerHTMLString += `<li type='' onclick="app.PokeAPIController.selectActivePokemon('${pokemon.name}')" class="fs-5 selectable">${pokemon.name}</li>`)
    );
    setHTML("wildPokemon", innerHTMLString);
  }

  drawActivePokemon() {
    const pokemon = AppState.activePokemon;
    setHTML("activePokemon", pokemon.activePokemonTemplate);
  }
}
