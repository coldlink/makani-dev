import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "tailwindcss";
import type { AcceptedPlugin } from "npm:postcss@8.5.6";

const postcssPlugins: AcceptedPlugin[] = [
	tailwindcss(),
	autoprefixer() as unknown as AcceptedPlugin,
];

export default defineConfig({
	appType: "custom",
	plugins: [fresh()],
	css: {
		postcss: {
			plugins: postcssPlugins,
		},
	},
});
