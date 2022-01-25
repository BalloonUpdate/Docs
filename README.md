## Minecraft文件更新助手帮助文档（版本4.0）

—— 更新客户端小程序，Mod服好帮手（旧版本文档[点击这里](#历史版本)跳转）

!> 4.0版本和3.0版本不兼容，如果不是首次安装，请仔细阅读教程重新安装

## 软件架构

为了支持更多的运行环境。服务端程序和客户端程序都有多个发行版，请根据自己的技术水平选择合适的服务端和客户端。由于通信协议是兼容的，任意服务端可以混搭任意客户端使用。

+ 服务端：1. `单文件服务端（难度：低）`2. `PHP服务端（难度：中）`3. `静态服务端（难度：高）`
+ 客户端：1. `正式版客户端（难度：低）`2. `Jar版客户端（难度：非常低）`


### 如何选择

<!-- tabs:start -->

#### **快速选择（环境要求）**

首选正式版客户端。如果你非常在意文件体积和跨平台特性，请考虑使用Jar客户端

环境要求：

+ `PHP服务端`：PHP7.2+，不建议使用PHP8.0
+ `静态服务端`：任意HTTP服务器
+ `单文件服务端`：Java 8或更高（适合**小白和尝鲜用户**）

+ `正式版客户端`：Windows7 x64或以上（不支持32位！）
+ `Jar版客户端`：Java 8或更高

#### **客户端（详细对比）**

|                    | 正式版客户端 | Jar客户端        |
| ------------------ | ------------ | ---------------- |
| 完整的文件更新功能 | 支持         | 支持             |
| 一键启动           | 支持         | 支持（但很麻烦） |
| 版本缓存           | 支持         | 支持             |
| CDN无缓存          | 支持         | 支持             |
| 更新后指令         | 支持         | 无               |
| 快速校验           | 支持         | 支持             |
| 公告栏             | 支持         | 无               |
| HTML自定义界面     | 支持         | 无               |
| 跨平台             | 无           | 支持             |
| 文件体积           | 80MB左右     | 5MB左右          |
| 杀软误报率         | 非常低       | 极低             |

#### **服务端（详细对比）**

`小型规模服务器`或者`朋友联机`：推荐使用**单文件服务端**，或者**PHP端**

单文件服务端能承受的并发有限，建议用于朋友间联机，或者小规模服务器

---

`中型规模服务器`：推荐使用**PHP端**或**静态端**。**PHP端**侧重易配置。**静态端**侧重高并发

Git用户可以点击[这里](https://github.com/updater-for-minecraft/StaticServerForPages)查看利用Pages服务来部署静态端的例子

---

`大型规模服务器`：推荐静态服务端，并部署在内容分发网络或者对象存储（目前支持阿里和腾讯两家的对象存储）上，以减轻服务器的带宽压力

<!-- tabs:end -->

## 下载安装

下载请跳转到[MCBBS贴内](https://www.mcbbs.net/thread-711833-1-1.html)，或者[点击这里](https://jq.qq.com/?_wv=1027&k=PqAEtn39)加入【文件更新助手官方交流群】 925057600 从群文件获取（同步更新），或者前往[GithubRelease](#开源地址)下载

对应的教程：[PHP服务端](PHPServerInstallation.md) / [静态服务端](StaticServerInstallation.md) / [单文件服务端](LittleServerInstallation.md)（也可以随时从右上角的导航栏或者本页面最底部的目录跳转）

## 技术支持

[RunningIntoTrouble.md](RunningIntoTrouble.md ':include')

## 版本升级

在下面列出的各个版本号区间内，可以直接替换文件来升级到新版而无需重新配置，但如果你现有版本和将要升级的版本不再同一个区间里，那么就需要完全重头开始安装配置

| 正式版客户端 | Jar版客户端  | 服务端   |
| ------------ | ------------ | -------- |
| 3.0          | 0.0.1\~0.0.4 | 3.2\~3.6 |
| 3.1          | 1.0          | 3.7      |
| 4.0          | 4.0          | 4.0      |

## 参与贡献

由于个人精力有限，代码中难免会出现错误、疏忽、遗漏，还需要在大家的帮助下不断完善

如果你发现了问题，欢迎前来GitHub仓库提交Issue、PullRequest，或者亲自告诉我，我会不断改进

如果帮助文档中出现了错误或者是不适合的地方，同样欢迎大家进行修改，提交PR！

## 爱发电主页

https://afdian.net/@aprilforest

做开源项目不易，如果你有经济能力，欢迎过来赞助一下哟！

## 开源地址

喜欢的话，欢迎前来给一颗Star呀`(｀・ω・´)`

+ 文档：https://github.com/updater-for-minecraft/Docs
+ 客户端：https://github.com/updater-for-minecraft/Client
+ 小工具：https://github.com/updater-for-minecraft/Tool
+ 服务端：[PHP服务端](https://github.com/updater-for-minecraft/PhpServer)、[单文件服务端](https://github.com/updater-for-minecraft/LittleServer)
+ 客户端可执行文件打包器：https://github.com/updater-for-minecraft/LittleWrapper
+ Jar版客户端：https://github.com/updater-for-minecraft/LittleClient

## 更新记录

  - [正式版客户端更新记录](https://github.com/updater-for-minecraft/Client/releases)（将跳转至GithubRelease）
  - [Jar版客户端更新记录](https://github.com/updater-for-minecraft/LittleClient/releases)（将跳转至GithubRelease）

## 历史版本

[HistoricalVersions.md](HistoricalVersions.md ':include')

## 目录

[navbar.md](navbar.md ':include')
