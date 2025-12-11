// deno run --allow-read --allow-env sign.ts
import "jsr:@std/dotenv@0.224.0/load";
import { getImagorUrl } from "../../utils/imagor.ts";

const input = prompt("Enter imagor url: ");

if (!input) {
	console.log("No input provided");
	Deno.exit(1);
}

console.log(
	getImagorUrl(input),
);
