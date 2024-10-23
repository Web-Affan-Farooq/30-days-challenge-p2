import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/474x/ed/fe/81/edfe8162994da6fbe141dbd1228ea792.jpg')",
        'starters': "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/236x/50/1e/de/501ede340074de2e80ef1ee8ab6d5618.jpg')",
        'desserts': "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/236x/e5/b1/be/e5b1be682581fd52ee0be2c2740dcb86.jpg')",
        'soups': "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/236x/43/44/60/434460b3350d8ab1357512a77d88c4cd.jpg')",
        'dinners': "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/236x/b6/99/3a/b6993a326248cd46caa08b0b83559160.jpg')",
        'lunches': "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/enabled_hi/236x/5e/58/80/5e588063a57d547d390b7f3ee57df0b0.jpg')",
        'chinese': "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/236x/ec/e9/f4/ece9f42b3bd979e8b15ccb3871ca7aad.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

