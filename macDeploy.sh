#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 清空指定文件夹下的所有文件
rm -rf ../testBlog/*

# 拷贝指定文件夹下的内容到指定文件夹下 这里的根目录就是项目目录
cp -rf docs/.vuepress/dist ../testBlog

# 进入生成的文件夹
cd ../testBlog/dist



git init
git add -A
git commit -m 'deploy'

git branch -m testBranch

git remote add orgin https://github.com/LLDLZ/my-blog.git

# # # 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/LLDLZ/my-blog.git testBranch

cd -