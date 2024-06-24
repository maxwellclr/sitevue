module.exports = {
  lintOnSave: false, // Desativa o linting durante o salvamento
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/sitevue/' : '/'
};
