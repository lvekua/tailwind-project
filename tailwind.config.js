module.exports = {
	content: [
    "./index.html",
    "./src/**/*.{html,js}"],

	theme: {
		extend: {
			maxWidth: {
				'16' : '16rem',
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		// ...
	],
};
