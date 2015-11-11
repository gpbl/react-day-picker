module.exports = {
    entry: "./DayPicker.js",
    output: {
        path: __dirname + "/dist",
        filename: "DayPickerGlobal.js",
        library: 'DayPicker',
        libraryTarget: "var"
    },
    externals: {
      "react": "React"
    }
}
