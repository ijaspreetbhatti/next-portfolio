import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                theBlue: "#3756F5",
                theDarkBlue: "#172468",
                theDarkGray: "#8d99ae",
                theLightGray: "#edf2f4",
                theBrightRed: "#ef233c",
                theDarkRed: "#d90429",
            },
            fontFamily: {
                heading: `'Playfair Display', serif`,
                body: `'Lato', sans-serif`,
                mono: `'Fira Mono', monospace`,
            },
        },
    },
    plugins: [],
};
export default config;
