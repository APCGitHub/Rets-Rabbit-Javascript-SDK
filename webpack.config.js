/**
 * Created by aclinton on 7/11/16.
 */
var path = require('path');
var include = path.join(__dirname, 'src');

module.exports = {
    entry: './src/rets_rabbit',
    output: {
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'RetsRabbit'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            //{test: /\.js$/, loader: 'babel', include},
            {test: /\.json$/, loader: 'json', include}
        ]
    }
};