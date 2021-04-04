
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      { //Order matters!
				test: /\.(c|sc|sa)ss$/,
				use: [{
					loader: 'style-loader',               //5. inject CSS to page
				}, {
					loader: 'css-loader',                 //4. translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader',             //3. Run post css actions
					options: {
						plugins: function () {            //2. post css plugins, can be exported to postcss.config.js
							return [
								require('precss'),
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader'                 //1. compiles Sass to CSS
				}]
			},
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif)$/,
        use:{
          loader: 'url-loader'
        }
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",'jsx', '.json'],
  },
  output: {
    publicPath : '/',
    path: path.resolve(__dirname,'./build'),
    filename: "[name].[contenthash].js",
  },
  // devtool: 'source-map',
  devServer:{
    contentBase:path.resolve(__dirname,'./build'),
    port:8000
  },
  plugins:[
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./src/index.html'),
      inject: 'body'
    })
  ]
};
