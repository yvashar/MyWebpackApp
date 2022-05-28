//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname,
      filename: 'dist/bundle.js'
    },
    devServer: {
      port: 4000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Accept, Origin, Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTION"
      }
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        sideEffects: true,
        include: [path.resolve(__dirname, 'src/indexStyle.css')],
        exclude: /node_modules/,
        use: [ 
          "style-loader",
         //MiniCssExtractPlugin.loader, // instead of style-loader
          'css-loader']
      },
      {
        test: /\.(svg|png)$/,
        use: 'file-loader'
      }
      ]
    },
    resolve: {
      extensions: [".js", ".json", '.css'],
      alias: {
        public: path.join(__dirname, './public')
      }
    },
    plugins: [
     // new MiniCssExtractPlugin({filename: 'styles.css'}),
    ],
  };