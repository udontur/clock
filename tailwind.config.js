/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./404.html", "./clock.html"],
  theme: {
    extend: {
      fontFamily: {
        jetmono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

