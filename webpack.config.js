import path from "path";
const [join, resolve] = path;

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: [".ts", ".js"] },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public"),
  },
  deveServer: {
    static: {
      directory: join(__dirname, "public"),
    },
    port: 3000,
  },
};
