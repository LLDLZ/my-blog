const console = require('console')
const fs = require('fs')

const path = require('path')

const { log, err } = require('./util')

const earnSrcDir = () => path.resolve(__dirname, '../../')

const srcDirUrl = earnSrcDir()

const docsDirUrl = srcDirUrl + '\\docs'


// 图片路径
const imgDirUrl = docsDirUrl + '\\.vuepress\\public\\assets\\img'

// const configDirUrl = docsDirUrl + '\\.vuepress\\config.js'

const menuDirUrl = srcDirUrl + '\\.vuepress\\menu'

const handle = info => {
    const { targetDirName, childDirName } = info
    // 拿到创建文件夹的名字
    // 创建文件夹 若有该文件 mkdir 会抛错 此时 读取该文件目录下的所有文件 生成最后一个文件名字 ex[1,2,3,4] 生成 5.md 文件
    // todo 命令行选择文件夹 生成文件

    // console.log(srcDir);
    // console.log(docsDir);
    // readDirContent(srcDir)
    // readDirContent(docsDir)
    // console.log('docsDir',)
    // isFileDir(docsDir)
    // 创建 md 类资源 
    // createMdSource(targetDirName, docsDirUrl, childDirName)
    // 创建 img 资源
    // createImgSource(targetDirName, imgDirUrl, childDirName)
    // 创建 menu 资源
    // createMenuSource(targetDirName, menuDirUrl, childDirName)
    testFn()
}

const testFn = async () => {
    await mkdirP(docsDirUrl)
    log(111)
}

const mkdirP = (url) => new Promise((res, rej) => {
    fs.mkdir(url, error => {
        if (error && error.code === 'EEXIST') {
            err(`目录已经存在`)
        } else {
            log(`已创建文件夹`)
        }
        res()
    })
})

const createMdSource = (targetDirName, docsDir, childDirName) => {
    mkdir(targetDirName, docsDir, childDirName)
}

const createImgSource = (targetDirName, imgDir, childDirName) => {
    mkdir(targetDirName, imgDir, childDirName)
}

const createMenuSource = (targetDirName, menuDir, childDirName) => {
    mkdir(targetDirName, menuDir, childDirName)
}



const mkdir = (targetDirName, targetDir, childDirNames = []) => {
    //若文件夹不存在则创建文件夹 若存在则抛出错误 若文件夹存在 看 childDirName 是否有值 若有值 递归调用
    // 判断是否为 图片地址

    const newTargetDirName = targetDir + `\\${targetDirName}`

    fs.mkdir(newTargetDirName, error => {
        if (error && error.code === 'EEXIST') {
            err(`${targetDirName}目录已经存在`)
            // readDirContent(newTargetDirName)
        } else {
            log(`已创建文件夹${targetDirName}`)
            log(`${targetDirName}文件夹路径 : ${newTargetDirName}`)
        }
        isChildDirNameExist(newTargetDirName, childDirNames)
    })
}
const mkFile = (fileName, targetDirName, fileType = 'md', fileContent = "#") => {
    const fileFull = fileName + '.' + fileType
    console.log('mkFile fileFull', fileFull);
    console.log('mkFile targetDirName', targetDirName);

    fs.writeFile(targetDirName + '\\' + fileFull, fileContent, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`
        文件 : ${fileFull}创建成功
        文件地址 :  ${targetDirName}
        `);
    });
}

const earnFileNames = (list) => {
    const fileNames = []
    list.map(v => {
        const [fileName,] = v.split('.')
        fileNames.push(fileName)
    })
    // console.log('fileNames', fileNames)
    return fileNames
}


const compareFileName = fileNames => fileNames.sort((a, b) => a - b)

/**
 * 判断子文件夹是否存在 如果存在调用 mkFile ()
 * @param {*} targetDirName  目标文件夹名称
 * @param {*} childDirNames  子文件夹集合
 * @returns 
 */
const isChildDirNameExist = (targetDirName, childDirNames = []) => {
    const imgFlag = targetDirName.indexOf(imgDirUrl) < 0

    const menuFlag = targetDirName.indexOf(menuDirUrl) < 0

    if (imgFlag && menuFlag) {
        // 非图片路径
        blogHandle(targetDirName, childDirNames)
    } else if (!imgFlag) {
        // 图片路径
        imgHandle(targetDirName, childDirNames)
    } else if (menuFlag) {
        // config 菜单配置
    }

}

const imgHandle = (targetDirName, childDirNames = []) => {
    // 图片路径
    if (childDirNames.length > 0) {
        const newTargetDirName = childDirNames.splice(0, 1)[0]
        mkdir(newTargetDirName, targetDirName)
    }
}

const blogHandle = (targetDirName, childDirNames = []) => {
    // 非图片路径
    if (childDirNames.length === 0) {
        const list = readDirContent(targetDirName)
        if (list.length === 0) {
            mkFile('1', targetDirName)
        } else {
            const fileNames = earnFileNames(list)
            const compareFileNames = compareFileName(fileNames)
            const lastFileName = compareFileNames[compareFileNames.length - 1]
            console.log('compareFileNames', compareFileNames)
            console.log('lastFileName', lastFileName)
            let fileName = (Number(lastFileName) + 1).toString();
            mkFile(fileName, targetDirName)
        }
    } else {
        const newTargetDirName = childDirNames.splice(0, 1)[0]
        mkdir(newTargetDirName, targetDirName)
    }
}

const menuHandle = (targetDirName, childDirNames = []) => {
    if (childDirNames.length === 0) return
    if (childDirNames.length === 1) {
        const fileName = childDirNames[0]
        const str =
            `
            module.exports = [
                {
                    title: "cmder解决命令输入残留字符 、更改命令提示符",
                    path: "/issue/cmder/1"
                }
            ]
            `
        mkFile(fileName, targetDirName, 'js',)
    } else {
        const newTargetDirName = childDirNames.splice(0, 1)[0]
        mkdir(newTargetDirName, targetDirName)
    }
}



// 判断指定的目录是否存在
const isTargetDirNameExist = (targetDir) => {
    fs.stat(targetDir, (error, stat) => {
        // console.log('error', error);
        // console.log('stat', stat);
        if (error) throw error
        if (stat.isDirectory()) {
            //判断当前文件是否是目录
            console.log('目录:' + targetDir);
        } else if (stat.isFile()) {
            //判断当前文件是否是普通文件
            console.log('文件:' + targetDir);
        }
    })
}

const readDirContent = (targetDir) => {
    const list = fs.readdirSync(targetDir)
    console.log(targetDir, list);
    return list
}
module.exports = handle