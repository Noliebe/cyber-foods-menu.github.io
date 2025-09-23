# 赛博家庭菜谱

## link (也可以访问 site 目录内的 md文件 来查看内容)

https://noliebe.github.io/cyber-foods-menu.github.io/


## 可以通过配置 /site/config.mts 来配置网站信息, /site内的文件都可以生成html文件

修改文件后需要 重新运行 npm run build 来重新生成 html 文件 来更新 io展示内容.

## use
use `node`@22 , `vitepress`


## 本地运行方法以及更新静态站方法：
1. 确保node环境和npm，  git clone 后 npm init
2. 每次运行可以通过 npm run dev 来启动服务。
3. 修改内容后即时生效，每次 git push 前需要运行 npm run build 来编译网站的静态文件
4. 将网站md文件和编译后的html等一起push到github，github会自动读取到更新
