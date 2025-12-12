module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#15313D",
        primaryMid: "#3CABDA",
        paleBlue: "#EAF9FB",
        panelBlue: "#F4FDFF",
        softBlue: "#96E5FF",
      },
      fontFamily: {
        serifDisplay: ["'DM Serif Display'", "serif"],
        inter: ["Inter", "sans-serif"]
      },
      borderRadius: {
        frame: "40px",
        card: "12px"
      },
      boxShadow: {
        frame: "0 24px 48px rgba(0,0,0,0.12), inset 0 6px 12px rgba(255,255,255,0.35)",
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
}
