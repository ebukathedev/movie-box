/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		extend: {
			colors: {
				gray: "#9CA3AF",
				darkGray: "#666666",
				rose: "#BE123C",
				lightRose: "#BE123C1A",
				lightGray: "#C7C7C7",
			},
			fontFamily: {
				dmSans: ["DM Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
