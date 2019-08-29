const path = require('path')

module.exports = ({ config }) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: { presets: ['@babel/preset-typescript'] },
                },
            ],
        },
    )
    config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.join(__dirname, '../'),
    }
    config.resolve.extensions.push('.ts', '.tsx')
    return config
}
