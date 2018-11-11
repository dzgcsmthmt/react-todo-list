const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    "entry": "./src/index.js",
    "output": {
        "path": __dirname+'/static',
        "filename": "[name].[hash:8].js"
    },
    "devtool": "source-map",
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env","react"
                        ]
                    }
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}
