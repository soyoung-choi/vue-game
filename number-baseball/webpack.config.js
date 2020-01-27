// 절대경로를 쉽게 알려줌
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    // 확장자를 제거할 수 있음
    extensions: ['.js', '.vue'],
  },
  entry: { 
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      // vue-loader가 .vue인 파일들을 모두 자바스크립트 파일로 변환해줌
      test: /\.vue$/,
      use: 'vue-loader',
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};