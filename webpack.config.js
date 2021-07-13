//entry point -> output bundle file

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// using module.exports as a arrow function just new syntax gives us access to be able to use arguments like 'env'
module.exports = (env) => {
    
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {

            entry: './src/app.js',
            output:{
                path: path.join(__dirname,'public'),
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
                CSSExtract
            ],
            // allows browser console to lead errors back to actual .js file and not bundle.js 
            // the isProduction with ternery operator here is to check if we are in production mode if we are in Production mode then we will run the smaller "source-map" 
            devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map' ,
            devServer: {
                contentBase: path.join(__dirname,'public'),
                historyApiFallback: true
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