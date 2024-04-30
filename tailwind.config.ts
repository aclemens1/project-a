import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const hexToRGBA = (hex: string, opacity: number): string => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const mainColorHex = "#147D73"

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "foboh-field": "#F8FAFC",
        "foboh-panel": "#FFFFFF",
        "foboh-main": mainColorHex,
        "foboh-main-disabled": hexToRGBA(mainColorHex, 0.9),
        "foboh-impact": "#DC3545",
        "foboh-text": "#637381",
        "foboh-secondary": "#d9d9d9",
        "foboh-text-hover": "#637381"
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
