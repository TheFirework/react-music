const { override, fixBabelImports, addWebpackAlias, addLessLoader, addWebpackModuleRule, adjustStyleLoaders } = require('customize-cra');
const path = require("path")

module.exports = override(
    addWebpackAlias({ //路径别名
        '@': path.resolve(__dirname, 'src'),
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions:{
            javascriptEnabled: true,
        }
    }),
    addWebpackModuleRule({
        test: /\.svg$/,
        include: [path.resolve('src/icons')],
        use: [
            {
                loader: 'svg-sprite-loader',
                options: { symbolId: "[name]" }
            }]
    }),
    adjustStyleLoaders(rule=>{
        if(rule.test.toString().includes('scss')){
            rule.use.push({
                loader: require.resolve("sass-resources-loader"),
                options: {
                    resources: "./src/static/style/variablers.scss" //这里是你自己放公共scss变量的路径
                }
            })
        }
    })
);