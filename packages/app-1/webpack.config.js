const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false
  },

  output: {
    publicPath: "http://localhost:3002/",
    pathinfo: true,
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
          cacheDirectory: false,
        }
      },
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      library: { type: "var", name: "app_1" },
      filename: "remoteEntry.js",
      remotes: {
        libs: 'libs',
        // app_02: "app_02",
        // app_03: "app_03"
      },
      exposes: {
      },
      // shared: ["react", "react-dom", "@material-ui/core", "react-router-dom"]
    }),
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html"
    // })
  ]
};
