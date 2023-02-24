const console = require('console')
const fs = require('fs')

const path = require('path')

const { log, err, success } = require('./util')

const earnSrcDir = () => path.resolve(__dirname, '../../')

let GSrcDirUrl = earnSrcDir()

let GDocsDirUrl;


// 图片路径
let GImgDirUrl;

// let configDirUrl = GDocsDirUrl + '\\.vuepress\\config.js'
// 菜单路径
let GMenuDirUrl;

let GInfo;

let GSystemEnv;

let GSystemPathStr;

const SystemEnv = {
    // mac
    darwin: 'darwin',
    // win
    win: 'win32',
}

const handle = info => {
    const { targetDirName, childDirNames } = info
    GInfo = info
    // 拿到创建文件夹的名字
    // 创建文件夹 若有该文件 mkdir 会抛错 此时 读取该文件目录下的所有文件 生成最后一个文件名字 ex[1,2,3,4] 生成 5.md 文件
    // todo 命令行选择文件夹 生成文件

    GSystemEnv = process.platform

    GSystemPathStr = GSystemEnv.trim() === SystemEnv.darwin ? '/' : '\\'

    handleFloderPath()

    // console.log(process.platform)
    // console.log(srcDir);
    // console.log(docsDir);
    // readDirContent(srcDir)
    // readDirContent(docsDir)
    // console.log('docsDir',)
    // isFileDir(docsDir)
    // 创建 md 类资源 
    // createMdSource(targetDirName, docsDirUrl, childDirName)
    // 创建 img 资源
    // createImgSource(targetDirName, GImgDirUrl, childDirName)
    // 创建 menu 资源
    // createMenuSource(targetDirName, menuDirUrl, childDirName)

    // 创建 md 类资源 
    createSource(targetDirName, GDocsDirUrl, childDirNames)

    // 创建 img 资源
    createSource(targetDirName, GImgDirUrl, childDirNames)

    // 创建 menu 资源
    createSource(targetDirName, GMenuDirUrl, childDirNames)

}

const handleFloderPath = () => {
    GDocsDirUrl = GSrcDirUrl + GSystemPathStr + 'docs'

    GImgDirUrl = GDocsDirUrl + `${GSystemPathStr}.vuepress${GSystemPathStr}public${GSystemPathStr}assets${GSystemPathStr}img`


    GMenuDirUrl = GDocsDirUrl + `${GSystemPathStr}.vuepress${GSystemPathStr}menu`

}

/**
 * 创建文件夹
 * @param {*} targetDirName 目标文件夹名称
 * @param {*} targetDirUrl  目标文件夹地址
 * @returns 
 */
const mkdir = (targetDirName, targetDirUrl) => new Promise((res, rej) => {
    //若文件夹不存在则创建文件夹 若存在则抛出错误 若文件夹存在 看 childDirName 是否有值 若有值 递归调用
    // 判断是否为 图片地址

    const newTargetDirUrl = targetDirUrl + `${GSystemPathStr + targetDirName}`

    fs.mkdir(newTargetDirUrl, error => {
        if (error && error.code === 'EEXIST') {
            err(`${targetDirName}目录已经存在`)
            // readDirContent(newTargetDirName)
        } else {
            success(`已创建文件夹${targetDirName}`)
            log(`${targetDirName}文件夹路径 : ${newTargetDirUrl}`)
        }
        res()
    })
})

/**
 * 创建相关资源
 * @param {*} targetDirName 目标文件夹名称
 * @param {*} targetDirUrl  目标文件夹路径
 * @param {*} childDirNames 子目录集合
 */
const createSource = async (targetDirName, targetDirUrl, childDirNames) => {
    await mkdir(targetDirName, targetDirUrl)
    isChildDirNameExist(targetDirName, targetDirUrl, childDirNames)
}

/**
 * 创建文件
 * @param {*} fileName 文件名称
 * @param {*} targetDirUrl 目标文件夹路径
 * @param {*} fileType 文件类型
 * @param {*} fileContent 文件内容
 */
const mkFile = (fileName, targetDirUrl, fileType = 'md', fileContent = "#") => {
    const fileFull = fileName + '.' + fileType
    // console.log('mkFile fileFull', fileFull);
    // console.log('mkFile targetDirUrl', targetDirUrl);

    fs.writeFile(targetDirUrl + GSystemPathStr + fileFull, fileContent, function (error) {
        if (error) {
            return err(error);
        }
        success(`
        文件 : ${fileFull}创建成功
        文件地址 :  ${targetDirUrl}
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
 * @param {*} targetDirUrl  目标文件夹名称
 * @param {*} childDirNames  子文件夹集合
 * @returns 
 */
const isChildDirNameExist = (targetDirName, targetDirUrl, childDirNames = []) => {
    const newTargetDirUrl = targetDirUrl + `${GSystemPathStr + targetDirName}`

    const imgFlag = newTargetDirUrl.indexOf(GImgDirUrl) < 0

    const menuFlag = newTargetDirUrl.indexOf(GMenuDirUrl) < 0

    // 防止下列操作 childDirNames 数组 影响全局的值
    const cloneChildDirNames = [...childDirNames]

    if (imgFlag && menuFlag) {
        // 非图片路径
        blogHandle(newTargetDirUrl, cloneChildDirNames)
    } else if (!imgFlag) {
        // 图片路径
        imgHandle(newTargetDirUrl, cloneChildDirNames)
    } else if (!menuFlag) {
        // config 菜单配置
        menuHandle(newTargetDirUrl, cloneChildDirNames)
    }
}

const imgHandle = (targetDirUrl, childDirNames = []) => {
    // 图片路径
    if (childDirNames.length > 0) {
        const newTargetDirName = childDirNames.splice(0, 1)[0]
        createSource(newTargetDirName, targetDirUrl, childDirNames)
    }
}

const blogHandle = (targetDirUrl, childDirNames = []) => {
    // 非图片路径
    if (childDirNames.length === 0) {
        const list = readDirContent(targetDirUrl)
        if (list.length === 0) {
            mkFile('1', targetDirUrl)
        } else {
            const fileNames = earnFileNames(list)
            const compareFileNames = compareFileName(fileNames)
            const lastFileName = compareFileNames[compareFileNames.length - 1]
            // console.log('compareFileNames', compareFileNames)
            // console.log('lastFileName', lastFileName)
            let fileName = (Number(lastFileName) + 1).toString();
            mkFile(fileName, targetDirUrl)
        }
    } else {
        const newTargetDirName = childDirNames.splice(0, 1)[0]
        // mkdir(newTargetDirName, targetDirUrl)
        createSource(newTargetDirName, targetDirUrl, childDirNames)
    }
}

const menuHandle = (targetDirUrl, childDirNames = []) => {
    if (childDirNames.length === 0) return
    if (childDirNames.length === 1) {
        const fileName = childDirNames[childDirNames.length - 1]
        // console.log('fileContent', str);
        // console.log('targetDirName', targetDirName);
        // console.log('targetDirUrl', targetDirUrl);
        // console.log('childDirNames', childDirNames); 

        const str = menuContentHandle(targetDirUrl)
        mkFile(fileName, targetDirUrl, 'js', str)

    } else {
        const newTargetDirName = childDirNames.splice(0, 1)[0]
        createSource(newTargetDirName, targetDirUrl, childDirNames)
    }
}


const menuContentHandle = (targetDirUrl) => {
    const { targetDirName: originalTargetDirName, childDirNames: originalChildDirNames } = GInfo
    const pathNames = [originalTargetDirName, ...originalChildDirNames]
    // console.log('pathNames', pathNames);
    let pathStr = ''
    let docsPathStr = GDocsDirUrl
    pathNames.map((v, idx) => {
        pathStr = `${pathStr}/${v}`
        docsPathStr = `${docsPathStr}${GSystemPathStr + v}`
        if (idx == pathNames.length - 1) {
            const docsPathStrList = readDirContent(docsPathStr)
            // console.log('docsPathStrList', docsPathStrList);
            pathStr = `${pathStr}/${docsPathStrList.length + 1}`
        }
    })

    const templeteStr = `
    {
        title: "我是新建 bolg",
        path: "${pathStr}"
    },
    `

    const fileName = pathNames[pathNames.length - 1]

    const list = readDirContent(targetDirUrl);
    // console.log('list', list);

    let fileExistFlag = false
    list.map(v => {
        if (!(v.indexOf(fileName) < 0)) {
            fileExistFlag = true
        }
    })

    let str = ''

    if (!fileExistFlag) {
        return str = `module.exports = [
            ${templeteStr}
        ]
    `
    }

    const readFileContent = fs.readFileSync(`${targetDirUrl + GSystemPathStr + fileName}.js`, "utf8");

    // console.log('readFileContent', readFileContent);

    if (readFileContent.length > 0) {
        let idx = readFileContent.indexOf(']')
        str = insertStr(readFileContent, idx, templeteStr)
        // console.log('insertStr', str);
    }

    // console.log('fileContent', str);
    return str
}

const readDirContent = (targetDirUrl) => {
    const list = fs.readdirSync(targetDirUrl)
    // console.log(targetDirUrl, list);
    return list
}

const insertStr = (sourceStr, start, newStr) => {
    return sourceStr.slice(0, start) + newStr + sourceStr.slice(start)
}


// 判断指定的目录是否存在
const isTargetDirNameExist = (targetDirUrl) => {
    fs.stat(targetDirUrl, (error, stat) => {
        // console.log('error', error);
        // console.log('stat', stat);
        if (error) throw error
        if (stat.isDirectory()) {
            //判断当前文件是否是目录
            console.log('目录:' + targetDirUrl);
        } else if (stat.isFile()) {
            //判断当前文件是否是普通文件
            console.log('文件:' + targetDirUrl);
        }
    })
}

module.exports = handle
