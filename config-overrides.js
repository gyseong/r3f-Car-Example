
// config-overrides.js
const { override } = require('customize-cra');

module.exports = override((config) => {
  // .glsl 파일을 사용하기 위해 웹팩 모듈에 glsl 파일 로더를 추가합니다.
  config.module.rules.push({
    test: /\.(glsl|vs|fs|vert|frag)$/,
    exclude: /node_modules/,
    use: ['raw-loader'],
  });

  return config;
});