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
  // 모듈은 웹팩의 대부분의 역할
  // 웹팩은 자바스크립트를 하나로 합쳐주는 역할
  // loader은 자바스크립트가 아닌 것을 자바스크립트로 변환해줌
  module: {
    rules: [{
      // vue-loader가 .vue인 파일들을 모두 자바스크립트 파일로 변환해줌
      test: /\.vue$/,
      use: 'vue-loader',
    }, {
      // 스타일 로더 추가
      test: /\.css$/,
      use: [
        // loader는 각각 하나의 역할을 함
        'vue-style-loader',
        'css-loader',
      ],
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    // 웹팩 데브 서버는 메모리에 생성하기 때문에, 실제 파일에는 생성하지 않음
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },
};