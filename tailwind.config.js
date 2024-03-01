/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "rgba(0, 0, 0, 0.8)",
        },
        black: "#000",
        white: "#fff",
        dodgerblue: "rgba(0, 123, 229, 0.8)",
        aliceblue: "#edf5fa",
        steelblue: "#359dd9",
        skyblue: "#56ccf2",
        cornflowerblue: "#18a0fb",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "981xl": "1000px",
        "80xl": "99px",
      },
    },
    fontSize: {
      "2xs": "11px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq550: {
        raw: "screen and (max-width: 550px)",
      },
      mq525: {
        raw: "screen and (max-width: 525px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
