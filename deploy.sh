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
# 声明提交的日期，避免每次查看提交信息都是 deploy 无法界定是否提交成功
git commit -m "deploy:$(date +%F%n%T)"

git branch -m gh-pages

git remote add orgin https://github.com/LLDLZ/my-blog.git

# # # 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/LLDLZ/my-blog.git gh-pages

cd -