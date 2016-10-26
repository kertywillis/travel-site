// Tout d'abord, on définit un objet pour dire quoi faire
module.exports = {
	// Dis quel fichier il doit regardé pour créer son bundle
	entry : "./app/assets/scripts/app.js",

	// On dit à Webpack où il doit sortir le projet
	output : {
		path : "./app/temp/scripts",
		filename : "app.js"
	},

	module : {
		loaders: [
			{
				loader : 'babel',
				query: {
					presets : ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}