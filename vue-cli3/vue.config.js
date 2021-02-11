module.exports = {

    lintOnSave: false,
    configureWebpack: {
        entry: ["babel-polyfill", "./src/main.js"]
    }

}