module.exports = {
  entry: "./js/watch_dogs.js",
  output: {
  	filename: "./js/bundle.js"
  },
  devtool: 'source-map',
  resolve: {
     extensions: [".js", ".jsx"]
   },
  module: {
   loaders: [
     {
       test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     },
     {
       test: /\.node$/,
       loader: "node-loader"
     }
   ]
 }
};
