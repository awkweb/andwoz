const withCSS = require('@zeit/next-css')

const path = require('path')

module.exports = withCSS({
    webpack(config, options) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.join(__dirname, '/'),
        }
        return config
    },
})
