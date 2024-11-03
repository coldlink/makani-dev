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
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "7rem",
      },
    },
  },
  plugins: [
    tailwindTypography,
  ],
} satisfies Config;
