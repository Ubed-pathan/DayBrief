import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "#0F1C2E",
        darkBlue: "#1f2b3e",
        customGray: "#374357",
        customGrayLight: "#374357",
        creamColor: "#e0e0e0",
        greenPink: "#a49e97",
        extremeLightBlue:"#cee8ff",
        bluePantColor: "#3D5A80",
        veryLightPurple: "#acc2ef",
        veryLightBlue: "#4d648d",
        customeDarkBlue: "#1F3A5F",
      },
    },
  },
  plugins: [],
} satisfies Config;


