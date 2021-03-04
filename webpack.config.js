const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // 虚拟打包路径，就是说文件夹不会真正生成，而是在8080端口虚拟生成
        publicPath: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
