import { type Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";

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
			"serif": ['"Libre Baskerville"', "serif"],
			"sans": ['"Lato"', "sans-serif"],
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontWeight: "400",
						},
						"h1 strong": {
							fontWeight: "700",
						},
						h2: {
							fontWeight: "400",
						},
						"h2 strong": {
							fontWeight: "700",
						},
						h3: {
							fontWeight: "400",
						},
						"h3 strong": {
							fontWeight: "700",
						},
						h4: {
							fontWeight: "400",
						},
						"h4 strong": {
							fontWeight: "700",
						},
					},
				},
			},
		},
	},
	plugins: [
		tailwindTypography,
	],
} satisfies Config;
