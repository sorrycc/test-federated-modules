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
    publicPath: "http://localhost:3001/",
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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {},
          },
        ],
      },
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      library: { type: "var", name: "libs" },
      filename: "remoteEntry.js",
      remotes: {
        // app_02: "app_02",
        // app_03: "app_03"
      },
      exposes: {
        antd: "./src/antd",
        react: "./src/react",
        'react-dom': "./src/react-dom"
      },
      // shared: ["react", "react-dom", "@material-ui/core", "react-router-dom"]
    }),
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html"
    // })
  ]
};
