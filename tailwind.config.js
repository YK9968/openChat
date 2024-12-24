/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        findUsersListWidth: "688px",
      },
      height: {
        chatHeight: "500px",
      },
    },
  },
  plugins: [],
};
