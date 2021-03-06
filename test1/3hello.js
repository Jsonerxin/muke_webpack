/**
 * 采用commonjs规范
 安装css-loader识别.css文件【npm install css-loader -D】
 安装style-loader识别style文件【npm install style-loader -D】
 注意：css-loader!表示处理css文件
 注意：style-loader!表示把处理完的css利用style的方式【内联】插入到html行内
 */
require("./3world");
require("style-loader!css-loader!./3style.css");

/**
 * 在命令行工具中执行：webpack 需要打包的文件 打包后的文件
 例如：webpack 3hello.js 3hello.bundle.js
 结果有：
 1：hash值；2：webpack版本号；3：asset表示打包后的文件；4：size表示打包后的文件大小
 5：chunks表示这次打包的分块；6：chunkname表示这次打包的名称
 */
function hello(atr) {
  console.log(atr);
}
hello("张小霖正在学习webpack");
