import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "foboh-field": "#F8FAFC",
        "foboh-panel": "#FFFFFF",
        "foboh-main": "#147D73",
        "foboh-main-disabled": "#9CB6B4",
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
