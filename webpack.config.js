module.exports = {
  entry: "./DayPicker.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "DayPicker.js",
    library: "DayPicker",
    libraryTarget: "var"
  },
  externals: {
    "react": "React"
  }
}
