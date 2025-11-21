const path = require("path");

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", options: { transpileOnly: true } }
    ]
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") }
};
