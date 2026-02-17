export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#4b5a0a",       // top navbar dark olive
        secondaryBg: "#6b7b1e",     // category bar green
        pageBg: "#f3f3f3",          // overall page background

        cardYellow: "#e6b71e",      // yellow cards
        cardLight: "#f3f0d7",       // light cream cards
        cardOlive: "#5f6b1b",       // dark green cards

        primaryText: "#ffffff",     // white text
        darkText: "#1a1a1a",        // black text
        mutedText: "#6b7280",       // grey text

        borderColor: "#dcdcdc",     // card border
        footerBg: "#3f4b08",        // footer dark olive
      },
    },
  },
  plugins: [],
};
