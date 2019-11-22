const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

// Entry Points
// https://webpack.js.org/concepts/entry-points

// Output
// https://webpack.js.org/concepts/output

// Plugins
// https://webpack.js.org/concepts/#plugins

// Loaders
// https://webpack.js.org/concepts/loaders

module.exports = {
  mode: "development",
  // You can specify a path to an "entry" file in multiple ways
  // An "entry" is the file where webapck begins
  // bundling all of your modules
  // For a single entry, write:
  // entry: "./src/client.js"
  //   For Multiple entry files bundle into a single file, use an array
  // entry: ["./src/client.js", "./src/defaults.js", "./src/constants.js"]
  //   To create multiple bundles from separate entry files, use an object:
  entry: {
    // Create a bundle "./dist/client.js" (named after the key)
    client: "./src/client.js",
    // Create a bundle "./dist/defaults.js" (named after the key)
    defaults: "./src/defaults.js",
    server: "./src/defaults.js"
  },
  output: {
    // The "path" property is used to specify the location where
    // our bundle files are created. By default, it is
    // path.join(__dirname, "build"),
    path: path.join(__dirname, "build"),
    // The "filename" property is used to change
    // the names of the bundled files.
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // Use "exclude" with a regulare expression to
        // files that should be ignored by this loader.
        // Notably, we should ignore node_modules
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|webp|jpeg)$/,
        loader: "file-loader",
        options: {
          outputPath: "images/"
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Demo", // <title>of the html file
      chunks: ["client"]
      // "chunks" tells webpack which bundled file to include
      // in the html file
    })
  ]
};
