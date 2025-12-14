// deno run --allow-read --allow-env sign.ts
// deno-lint-ignore no-unversioned-import
import "jsr:@std/dotenv/load";
import { getImagorUrl } from "../../utils/imagor.ts";

const input = prompt("Enter imagor url: ");

if (!input) {
	console.log("No input provided");
	Deno.exit(1);
}

console.log(getImagorUrl(input));
