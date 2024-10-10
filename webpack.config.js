const path = require('path');

module.exports = {
    entry: {
        receitas: './www/scripts/receitas.js',
        ingredientes: './www/scripts/ingredientes',
        validade:'./www/scripts/validade',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'www/scripts/bundle'), // destino para o arquivo bundle
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // permite que o Webpack divida o código em diferentes bundles
        },
    },
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
};
