//entry point -> output bundle file

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({path: '.env.test'})
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({path: '.env.development'})
}


// using module.exports as a arrow function just new syntax gives us access to be able to use arguments like 'env'
module.exports = (env) => {
    
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {

            entry: ['babel-polyfill','./src/app.js'],
            output:{
                path: path.join(__dirname,'public','dist'),
                filename:'bundle.js'
            },
        
        
            module: {
                rules: [{
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap:true
                                }
                            }, 
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }

                        ]
                    })
                }]
            },
            plugins: [
                CSSExtract,
                new webpack.DefinePlugin({
                    'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                    'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                    'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                    'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                    'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                    'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                    'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
                })
            ],
            // allows browser console to lead errors back to actual .js file and not bundle.js 
            // the isProduction with ternery operator here is to check if we are in production mode if we are in Production mode then we will run the smaller "source-map" 
            devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map' ,
            devServer: {
                contentBase: path.join(__dirname,'public'),
                historyApiFallback: true,
                publicPath: '/dist/'

            }
        
    }
}



// module.exports = {
//     entry: './src/app.js',
//     output:{
//         path: path.join(__dirname,'public'),
//         filename:'bundle.js'
//     },


//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_modules/
//         }, {
//             test: /\.s?css$/,
//             use:[
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
                
//             ]
//         }]
//     },
//     // allows browser console to lead errors back to actual .js file and not bundle.js 
//     devtool: 'eval-cheap-source-map',
//     devServer: {
//         contentBase: path.join(__dirname,'public'),
//         historyApiFallback: true
//     }
// };