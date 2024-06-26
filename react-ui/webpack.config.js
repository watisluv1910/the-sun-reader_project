const path = require('path'); // Built-in Node library to define paths to files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Indicates in which dev env we are - dev/prod
const production = process.env.NODE_ENV === 'production';

// Webpack parameters
module.exports = {
    entry: {
        // Bundle name: path to entry file:
        app: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        // Directory to export bundle in:
        path: path.resolve(__dirname, './build'),
        publicPath: '/',
        // With each new build hash will be added
        // to filename for better loading speed:
        filename: production ?
            '[name].[contenthash].bundle.js' :
            '[name].bundle.js',
        clean: true, // Clears /dist from old files during re-build
    },
    module: {
        rules: [
            { // Rule for JS
                test: /\.(js|jsx)$/, // Where to search
                exclude: /node_modules/, // Where not to search
                use: ['babel-loader'], // Array of loaders
            },
            { // Rule for styles modules
                test: /\.module\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !production,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !production,
                        },
                    },
                ],
            },
            { // Rule for styles
                test: /\.(sa|c)ss$/,
                exclude: /\.module\.s[ac]ss$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !production,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !production,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !production,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        // For importing files without writing extensions
        extensions: ['.*', '.js', '.jsx', '.scss'],
    },
    plugins: [
        new HtmlWebpackPlugin({ // Connects built JS with HTML file
            title: 'The Sun News',
            template: './src/index.html',
            favicon: './src/assets/icons/sun_favicon_round.png',
        }),
        new MiniCssExtractPlugin({
            filename: production ?
                '[name].[contenthash].bundle.css' :
                '[name].bundle.css',
            chunkFilename: production ?
                '[id].[contenthash].bundle.css' :
                '[id].bundle.css',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 3000,
        hot: true, // Helps to keep state in React and change only edited code
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false,
                withCredentials: true,
            },
        },
        historyApiFallback: true,
    },
    devtool: 'source-map',
    mode: production ? 'production' : 'development',
};
