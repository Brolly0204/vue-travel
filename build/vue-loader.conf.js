'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction ?
  config.build.productionSourceMap :
  config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    require('autoprefixer')({
      // browsers: ['Android >= 4', 'iOS >= 7'], // 迁移至package.json[https://github.com/postcss/autoprefixer/issues/845]
      remove: false
    }),
    require('postcss-plugin-px2viewport')({
      toRem: true, // default false
      toViewport: false, // default true
      handleDpx: true // default false
    })
  ]
}
