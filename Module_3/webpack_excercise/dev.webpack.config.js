const merge = require('webpack-merge');
const common = require('./base.webpack.config');
const dotenv = require('dotenv-webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      implementation: require('sass'),
                    },
                  },
                ],
              },
        
              {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
        ],
    },
    plugins: [
        new dotenv({
            path: './dev.env',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ]
});