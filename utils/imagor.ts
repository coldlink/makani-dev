import * as crypto from "node:crypto";

if (!Deno.env.get("IMAGOR_SECRET")) {
	console.log("IMAGOR_SECRET not set");
	Deno.exit(1);
}

if (!Deno.env.get("IMAGOR_URL")) {
	console.log("IMAGOR_URL not set");
	Deno.exit(1);
}

const sign = (path: string) => {
	const hash = crypto.createHmac("sha1", Deno.env.get("IMAGOR_SECRET")!)
		.update(path)
		.digest("base64")
		.replace(/\+/g, "-").replace(/\//g, "_");
	return hash + "/" + path;
};

const getImagorUrl = (path: string) => {
	return `${Deno.env.get("IMAGOR_URL")!}/${sign(path)}`;
};

export { getImagorUrl };
