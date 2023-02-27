#!/usr/bin/env sh
# mac deploy 优化后的
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git branch -m gh-pages

git remote add orgin https://github.com/LLDLZ/my-blog.git

# # # 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/LLDLZ/my-blog.git gh-pages

cd -