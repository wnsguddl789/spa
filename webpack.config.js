const path = require("path");
const miniCssExtract = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: "./resource/static/js/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "resource", "dist", "js"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					miniCssExtract.loader,
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[local]--[hash:base64:5]",
							},
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	plugins: [new miniCssExtract({ filename: "../css/bundle.css" })],
	target: ["web", "es5"],
};
