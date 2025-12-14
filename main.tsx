import { App, staticFiles } from "fresh";
import { type State } from "./utils/utils.ts";
import Layout from "./components/Layout.tsx";

export const app = new App<State>();

app.layout("*", Layout);
app.use(staticFiles());

// Include file-system based routes here
app.fsRoutes();
