const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path")
module.exports = {
	entry: "./src/index.ts", // 入口文件
	output: {
		filename: "main.js", // 打包之后的输出
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"], // 一些拓展东西,比如在引入的时候可以不写.js后缀,然后引入
	},
	module: {
		rules: [{
			test: /\.tsx?$/, // 匹配tsx后缀的东西然后对应loader来处理他
			use: "ts-loader",
			exclude: /node_modules/, // 排除一些文件,让这些文件不被处理
		}],
	},
	devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
	devServer: {
		contentBase: "./dist", // 本地开发环境运行时是基于哪个文件夹目录运行的
		stats: "errors-only", // 提示控制台的打印信息,这样配置只会在有错误的时候打印
		compress: false, // 不启动压缩
		host: "localhost",
		port: 8089,
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["./dist"],
		}), //打包的时候清除这个目录
		new HtmlWebpackPlugin({
			template: "./src/template/index.html",
		}), //指定打包的模版文件
		new CopyWebpackPlugin([{
			from: path.join(__dirname, "../src/modules/handle-title.js"),
			to: path.resolve(__dirname, "../dist")
		}])
	],
};