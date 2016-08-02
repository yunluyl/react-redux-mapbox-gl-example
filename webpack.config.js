var path = require('path');
var webpack = require('webpack');

module.exports =
    {
        debug : true,
        bail : true,
        cache : true,
        devtool : 'sourcemap',
        entry :
        {
            'bundle' : './app.jsx'
        },
        output :
        {
            path : __dirname + '/public',
            filename : '[name].js'
        },
        resolve:
        {
            alias:
            {
                'webworkify': 'webworkify-webpack'
            }
        },
        node :
        {
            fs: "empty"
        },
        plugins :
        [
            new webpack.DefinePlugin(
            {
                'process.env.NODE_ENV' : '"development"'
            }),
        ],
        module :
        {
            loaders :
            [
                {
                    test : /\.jsx$/,
                    loader : 'babel',
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.js$/,
                    include: path.resolve('node_modules/mapbox-gl-shaders/index.js'),
                    loader: 'transform/cacheable?brfs'
                }
            ],
            postLoaders:
            [
                {
                    include: /node_modules\/mapbox-gl-shaders/,
                    loader: 'transform',
                    query: 'brfs'
                }
            ]
        }
    }