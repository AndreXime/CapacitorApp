const path = require('path');

module.exports = {
    entry: './www/scripts/indexReceita.js', // ou seu arquivo principal
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'www/scripts'), // destino para o arquivo bundle
    },
    mode: 'development', // ou 'production'
};
