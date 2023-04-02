const fs = require('fs')
const path = require('path')
const { marked } = require('marked')
const browserSync = require('browser-sync')

/**
 * 01 读取md和css内容
 * 02 将上述读取出来的内容替换占位符，生成一个最终需要展开的html字符串
 * 03 将上述的 html 字符写入到指定 的 html文件中
 * 04 监听md文档内容的变化，然后更新 html 内容
 * 05 使用browser-sync 来实时显示 html 内容
 */

let mdPath = path.join(__dirname, process.argv[2])
let cssPath  = path.resolve('github.css')
let htmlPath = mdPath.replace(path.extname(mdPath), '.html')
console.log()
fs.watchFile(mdPath, (curr, prev) =>{
   if(curr.mtime !== prev.mtime){
    fs.readFile(mdPath, 'utf-8', (err, data) =>{
        // 将md --> html
         let htmlStr = marked(data)
         fs.readFile(cssPath, 'utf-8', (err, data) =>{
             let retHtml = temp.replace('{{content}}', htmlStr).replace('{{style}}', data)
             fs.writeFile(htmlPath, retHtml, (err) =>{
                 console.log('html 生成成功了')
             })
         })
     })
   }
})



browserSync.init({
    browser: '',
    server: __dirname,
    watch: true,
    index: path.basename(htmlPath)
})



const temp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 1000px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 750px) {
                .markdown-body {
                    padding: 15px;
                }
            }
            {{style}}
        </style>
    </head>
    <body>
        <div class="markdown-body">
            {{content}}
        </div>
    </body>
    </html>
`