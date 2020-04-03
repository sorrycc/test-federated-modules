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
    publicPath: "http://localhost:3003/",
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
        exclude: [
          /node_modules/,
        ],
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
      name: "app-2",
      library: { type: "var", name: "app_2" },
      filename: "remoteEntry.js",
      remotes: {
        // app_02: "app_02",
        // app_03: "app_03"
      },
      exposes: {
        // antd: "./src/antd",
        // react: "./src/react",
        // 'react-dom': "./src/react-dom"
      },
      shared: ["react", "react-dom"],
    }),
  ]
};
