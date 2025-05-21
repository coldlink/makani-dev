import { type Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";

const hexToRgb = (hex: string) => {
	hex = hex.replace("#", "");
	hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return `${r} ${g} ${b}`;
};

const customColors = {
	text: "#011a1e",
	background: "#ecfcfe",
	textDark: "#e1fafe",
	backgroundDark: "#011113",
	primary: {
		50: "#19010d",
		100: "#31021a",
		200: "#630335",
		300: "#94054f",
		400: "#c60669",
		500: "#f70883",
		600: "#f9399c",
		700: "#fa6bb5",
		800: "#fc9cce",
		900: "#fdcee6",
		950: "#fee6f3",
	},
} as const;

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
		fontFamily: {
			"serif": ['"Montaga"', "serif"],
			"sans": ['"Lato"', "sans-serif"],
		},
		extend: {
			colors: customColors,
			typography: () => ({
				DEFAULT: {
					css: {
						h1: {
							fontWeight: "400",
						},
						"h1 strong": {
							fontWeight: "400",
						},
						h2: {
							fontWeight: "400",
						},
						"h2 strong": {
							fontWeight: "400",
						},
						h3: {
							fontWeight: "400",
						},
						"h3 strong": {
							fontWeight: "400",
						},
						h4: {
							fontWeight: "400",
						},
						"h4 strong": {
							fontWeight: "400",
						},
					},
				},
				custom: {
					css: {
						"--tw-prose-body": customColors.text,
						"--tw-prose-headings": customColors.primary[300],
						"--tw-prose-lead": customColors.primary[400],
						"--tw-prose-links": customColors.primary[400],
						"--tw-prose-bold": customColors.text,
						"--tw-prose-counters": customColors.primary[300],
						"--tw-prose-bullets": customColors.primary[300],
						"--tw-prose-hr": customColors.primary[700],
						"--tw-prose-quotes": customColors.primary[400],
						"--tw-prose-quote-borders": customColors.primary[300],
						"--tw-prose-captions": `rgb(${
							hexToRgb(customColors.primary[100])
						} / 70%)`,
						"--tw-prose-kbd": customColors.primary[100],
						"--tw-prose-kbd-shadows": hexToRgb(customColors.primary[100]),
						"--tw-prose-code": customColors.primary[50],
						"--tw-prose-pre-code": customColors.primary[50],
						"--tw-prose-pre-bg": `rgb(${
							hexToRgb(customColors.primary[950])
						} / 50%)`,
						"--tw-prose-th-borders": customColors.primary[300],
						"--tw-prose-td-borders": customColors.primary[200],
						"--tw-prose-invert-body": customColors.textDark,
						"--tw-prose-invert-headings": customColors.primary[700],
						"--tw-prose-invert-lead": customColors.primary[800],
						"--tw-prose-invert-links": customColors.primary[800],
						"--tw-prose-invert-bold": customColors.textDark,
						"--tw-prose-invert-counters": customColors.primary[700],
						"--tw-prose-invert-bullets": customColors.primary[700],
						"--tw-prose-invert-hr": customColors.primary[300],
						"--tw-prose-invert-quotes": customColors.primary[800],
						"--tw-prose-invert-quote-borders": customColors.primary[300],
						"--tw-prose-invert-captions": `rgb(${
							hexToRgb(customColors.primary[900])
						} / 70%)`,
						"--tw-prose-invert-kbd": customColors.primary[900],
						"--tw-prose-invert-kbd-shadows": hexToRgb(
							customColors.primary[900],
						),
						"--tw-prose-invert-code": customColors.primary[950],
						"--tw-prose-invert-pre-code": customColors.primary[950],
						"--tw-prose-invert-pre-bg": `rgb(${
							hexToRgb(customColors.primary[50])
						} / 50%)`,
						"--tw-prose-invert-th-borders": customColors.primary[800],
						"--tw-prose-invert-td-borders": customColors.primary[900],
					},
				},
			}),
		},
	},
	plugins: [
		tailwindTypography,
	],
} satisfies Config;
