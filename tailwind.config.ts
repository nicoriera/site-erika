import type { Config } from "tailwindcss";

export default {
  content: [
    "./components//*.{js,vue,ts}",
    "./layouts//*.vue",
    "./pages//*.vue",
    "./plugins//*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#8FAF97",
          dark: "#6E8B78",
          light: "#EEF2EF",
        },
        sand: {
          DEFAULT: "#E8E2D9",
          light: "#FAF7F2",
        },
        coffee: "#6B635A",
        terracotta: "#C99A84",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "20px",
      },
      transitionProperty: {
        colors: "color, background-color, border-color",
      },
    },
  },
  plugins: [],
} satisfies Config;
