/** @type {import('tailwindcss').Config} */

export default {
     content: ["./src/**/*.{html,jsx}"],
     theme: {
          backgroundImage: {
               "hero-pattern": "url('/src/assets/home.png')",
          },
          extend: {
               colors: {
                    "bg-register": "#523620",
                    button: "#7A3D12",
                    navColor: "#967259",
                    colorAbout: "#EFE2D6",
                    colorService: "#EAD0B8",
                    colorTeams: "background: #EFE2D6",
               },
          },
     },
     plugins: [],
};
