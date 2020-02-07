module.exports = {
	publicPath:process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: 'dist',
	productionSourceMap: false,
	filenameHashing: true,  //打包文件名字是否有哈希值,false保持原文件名字
	productionSourceMap: false
	// devServer: {
	//     proxy: {
	//         '/api':{
	//             target:'http://jsonplaceholder.typicode.com',
	//             changeOrigin:true,
	//             pathRewrite:{
	//                 '/api':''
	//             }
	//         }
	//     }
	// }
}