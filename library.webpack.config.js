const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less", ".css"],
    modules: [__dirname, "node_modules"],
  },

  entry: {
    library: ["react", "react-dom"],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "./build/library"),
    library: "[name]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: "./build/library/[name].json",
    }),
  ],
};
