import { AppState } from "../AppState.js";

export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.nickName = data.nickName || "";
    this.img = data.sprites.front_default;
    this.weight = data.weight;
    this.height = data.height;
    this.types = data.types[0].type.name || [];
  }

  get wildListTemplate() {
    return `
    <li type='' onclick="app.PokeAPIController.selectActivePokemon(${this.name})" class="fs-5 selectable">${this.name}</li>
    `;
  }

  get activePokemonTemplate() {
    return `
      <div class="col-4 fw-bold fs-1 pt-5 mt-5 px-5 d-flex flex-nowrap">
      <div class="d-flex flex-column me-5">
        <p class=" bg-light text-center">${this.name}</p>
        <div class="">
          <img
            onclick="app.SandboxPokemonsController.catchActivePokemon('${this.name}')"
            class=" bg-dark img"
            src="${this.img}"
            alt="${this.name}"
          />
        </div>
        <div class="row bg-danger text-light d-flex flex-column">
            <div class="col-12 fs-3 d-flex ">
                <p class="text-left">Weight: ${this.weight}</p>
                <p>Height: ${this.height}</p>
                <ul>Types: ${this.types}</ul>
            </div>
        </div>
        <div class="row bg-danger text-light d-flex">
        <div class="col-12">
        <button class="btn btn-light">Catch Pokemon</button>
        </div>
      </div>
    </div>
    `;
  }

  //   get listOfTypes() {
  //     let innerHTMLString = "";
  //     this.types.forEach((type) => (innerHTMLString += `<li>${type}</li>`));
  //     return innerHTMLString;
  //   }
}

// name: String, required
// nickName: String,
// img: String, required
// weight: String,
// height: String,
// types: undefined,
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)
