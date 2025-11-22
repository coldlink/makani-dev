import "$std/dotenv/load.ts";

import { App, staticFiles } from "fresh";

export const app = new App()
	// Serve files from the static directory
	.use(staticFiles())
	// Enable file-system routes under routes/
	.fsRoutes();

if (import.meta.main) {
	await app.listen();
}
