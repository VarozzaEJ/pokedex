import { AccountController } from "./controllers/AccountController.js";
import { PokeAPIController } from "./controllers/PokeAPIController.js";
import { SandboxPokemonsController } from "./controllers/SandboxPokemonsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: "",
    controllers: [PokeAPIController, SandboxPokemonsController],
    view: "app/views/HomeView.html",
  },
  {
    path: "#/about",
    view: "app/views/AboutView.html",
  },
  {
    path: "#/account",
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: "app/views/AccountView.html",
  },
]);
