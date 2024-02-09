/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "work": "hsl(15, 100%, 70%)",
        "play": "hsl(195, 74%, 62%)",
        "study": "hsl(348, 100%, 68%)",
        "exercise": "hsl(145, 58%, 55%)",
        "social": "hsl(264, 64%, 52%)",
        "self-care": "hsl(43, 84%, 65%)",
        "blue": {
          DEFAULT: "hsl(246, 80%, 60%)",
          "very-dark": "hsl(226, 43%, 10%)",
          "dark": "hsl(235, 46%, 20%)",
          "desaturated": "hsl(235, 45%, 61%)",
          "pale": "hsl(236, 100%, 87%)",
        },
      },
    },
  },
  safelist: [
    "bg-work",
    "bg-play",
    "bg-study",
    "bg-exercise",
    "bg-social",
    "bg-self-care",
    "text-white",
    "text-blue-pale"
  ],
  plugins: [],
};
