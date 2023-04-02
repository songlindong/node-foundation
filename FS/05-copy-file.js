const fs = require('fs')

/**
 * 01 将a文件打开，利用read将数据保存到buffer中暂存起来
 * 02 打开b文件，利用write将buffer中的数据写入到b文件
 */

let buf = Buffer.alloc(10)

// fs.open('a.txt', 'r', (err, rfd) =>{
//     fs.open('b.txt', 'w', (err, wfd) =>{
//      fs.read(rfd, buf, 0, 10, 0, (err, readBytes) =>{
//             fs.write(wfd, buf, 0, 10, 0, (err, written) =>{
//                 console.log('写入成功')
//             })
//         })
//     })
// })

// 数据的完全拷贝
// fs.open('a.txt', 'r', (err, rfd) =>{
//     fs.open('b.txt', 'w', (err, wfd) =>{
//      fs.read(rfd, buf, 0, 10, 0, (err, readBytes) =>{
//             fs.write(wfd, buf, 0, 10, 0, (err, written) =>{
//                 fs.read(rfd, buf, 0, 5, 10, (err, readBytes) =>{
//                     fs.write(wfd, buf, 0, 5, 10, (err, written) =>{
//                         console.log('写入成功')
//                     })
//                 })
//             })
//         })
//     })
// })

let BUFFER_SIZE = Buffer.length
let readOffet = 0

fs.open('a.txt', 'r', (err, rfd) =>{
    fs.open('b.txt', 'w', (err, wfd) =>{
     function next() {
        fs.read(rfd, buf, 0, BUFFER_SIZE, readOffet, (err, readBytes) =>{
            if(!readBytes){
                fs.close(rfd, ()=>{})
                fs.close(wfd, ()=>{})
                console.log('拷贝完成')
                return
            }
            readOffet += readBytes
            fs.write(wfd, buf, 0, readBytes, (err, written) => {
                  next()
            })  
        })
     }
     next()
    })
})