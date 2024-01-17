/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-98": "#f5fbfe",
        "primary-95": "#e7f4fd",
        "primary-90": "#cfe9fc",
        "primary-70": "#70bef5",
        "primary-50": "#1092ef",
        "primary-40": "#0d75bf",
        "primary-35": "#0b66a8",
        "secondary-98": "#f8fafc",
        "secondary-95": "#edf3f7",
        "secondary-50": "#4d88b2",
        "secondary-40": "#3d6d8f",
        "secondary-25": "#264459",
        "secondary-15": "#172936",
        "gray-100": "#ffffff",
        "gray-98": "#fafafa",
        "gray-95": "#f2f2f2",
        "gray-40": "#666666",
        "gray-25": "#404040",
        "gray-16": "#000000",
        "transparent-25": "#cfe9fc",
        "transparent-10": "#f5fbfe",
        "success-98": "#f5fff6",
        "success-95": "#e5ffe9",
        "success-60": "#33ff4d",
        "success-35": "#00ba18",
        "alert-98": "#fff5fa",
        "alert-95": "#fee6f1",
        "alert-70": "#fb6aad",
        "alert-50": "#f91880",
        "black-50": "#f6f6f6",
        "black-100": "#e7e7e7",
        "black-200": "#d1d1d1",
        "black-300": "#b0b0b0",
        "black-900": "#000000",
      }
    },
  },
  plugins: [],
}

