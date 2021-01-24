const HtmlWebpackPlugin = require("html-webpack-plugin");
const Pwa = require("webpack-pwa-manifest");
const path = require("path");
const Workbox = require("workbox-webpack-plugin");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new Pwa({
      name: "petgram- this is a pet photos app",
      short_name: "petgram",
      description: "with petgram you can find any pet all over the world",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/Icons/favicon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new Workbox.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com | images.unplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp("https://petgram-server-ebon.vercel.app/"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
