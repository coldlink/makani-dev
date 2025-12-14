import { type Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
} satisfies Config;
