module.exports = {
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: config => {
  
      // 浏览器：web, electron : electron-renderer
      config.target = 'web'
    }
  };
  