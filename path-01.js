const path = require('path')

// console.log(__filename)
// console.log(__dirname)
// console.log(process.cwd())
// 1、获取路径中的基础名称
/**
 * 返回的就是接收路径当中的最后一部分
 * 第二个参数表示扩展名，如果说没有设置则返回完整的文件名称带后缀
 * 第二个参数做为后缀时，如果没有在当前路径中被匹配到，那么就会被忽略
 * 处理目录路径的时候如果结尾处有路径分割符，则也会被忽略掉
 * 
 */
// console.log(path.basename(__filename))

// console.log(path.basename(__filename, '.js'))
// console.log(path.basename(__filename, '.css'))
// console.log(path.basename('/a/b/c'))
// console.log(path.basename('/a/b/c/'))

//2、获取路径目录名
/**
 * 返回路径中最后一个部分的上一层目录所在路径
 */
// console.log(path.dirname(__filename))
// console.log(path.dirname('/a/b/c'))
// console.log(path.dirname('/a/b/c/'))

// 3、获取路径的扩展名
/**
 * 返回path路径中相应文件的后缀名
 * 如果path路径当中存在多个点，它匹配的是最后一个点，到结尾的内容
 */
// console.log(path.extname(__filename))
// console.log(path.extname('/a/b'))
// console.log(path.extname('/a/b/index.html.js.css'))
// console.log(path.extname('/a/b/index.html.js.'))

// 解析路径
/**
 * 接受一个路径，返回一个对象，包含不同的信息
 * 
 */
// const obj = path.parse('/a/b/c/index.html')
// const obj = path.parse('./a/b/c/')
// console.log(obj)
// console.log(obj.name)

// 5、序列化路径
// const obj = path.parse('./a/b/c/')
// console.log(path.format(obj))

// 6、判断当前路径是否为绝对路径

// console.log(path.isAbsolute('foo'))
// console.log(path.isAbsolute('/foo'))
// console.log(path.isAbsolute('//foo'))
// console.log(path.isAbsolute(''))
// console.log(path.isAbsolute('.'))
// console.log(path.isAbsolute('./bar'))

 // 7、拼接路径
//  console.log(path.join('a/b/c', 'c', 'index.html'))
//  console.log(path.join('/a/b/c', 'c', '../', 'index.html'))
//  console.log(path.join(''))

 // 8、规范化路径
//  console.log(path.normalize(''))
//  console.log(path.normalize('a/b/c/d'))
//  console.log(path.normalize('a////b/c../d'))
//  console.log(path.normalize('a/\b/c../d'))

// 9、绝对路径
/**
 * resolve([from], to)
 */
// console.log(path.resolve())
// console.log(path.resolve('a', 'b'))
console.log(path.resolve('index.html'))