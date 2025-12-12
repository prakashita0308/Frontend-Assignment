/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    container: { center: true, padding: "24px" },
    extend: {
      colors: {
        titleStart: "#15313D",
        titleEnd: "#3CABDA",
        frameBgStart: "#C6E9F7",
        frameBgEnd: "#E5F8FF",
        cardBg: "#F2FEFF",
        optionBg: "#E8F9FF",
      },
      fontFamily: {
        dmserif: ["DM Serif Display", "serif"],
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        frame: "0 18px 40px rgba(18,58,82,0.12)",
        insetSoft: "inset 0 6px 0 rgba(255,255,255,0.6)"
      }
    }
  },
  plugins: []
};
