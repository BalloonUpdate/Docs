## Minecraft文件更新助手帮助文档（版本3.1.4）

—— 更新客户端小程序，Mod服好帮手

<details>
<summary>3.0版本发行说明</summary>

不知不觉距离第一个版本发布已经过去5年了，首先感谢各位老板们在这些日子里的支持。特别是从远古项目ClientUpdater插件版和FileSA开始使用的老用户们。

v3.0主要以重写为主，之前v2.0使用json配置文件，但很多人都不熟悉json的语法，很容易漏掉列表末尾的逗号，现在v3.0使用yaml格式配置文件，只要有过开服经验的人，都能轻易上手。

v3.0也修复了v2.0遗留的兼容/报毒问题，现在3.0使用Electron框架构建，由c/c++驱动，不依赖.net，误报的概率能降低很多，兼容性也会提升不少。

另外比较重要的一个改变是：v3.0移除了自升级功能，这会使得软件配置起来更加简单，不会再遇到过程极其复杂的配置方法了，同时还会有一些额外好处，比如启动速度提升，文件大小变小，易安装和配置等优势。

本软件同时也是一个开源项目，所有相关源代码完全开源，欢迎各大开发者给项目提出问题，意见。

如果喜欢且有经济条件的话，欢迎访问我的[爱发电主页](#爱发电主页)赞助哦

</details>

> 如果你在找旧版本文档的话，点击[这里](#历史版本)跳转

## 软件架构

!> 本软件（包括所有子组件）没有使用Log4j依赖库，不会受到Log4j 0day CVE漏洞的影响，可放心使用！

为了支持更多的运行环境。Minecraft文件更新助手有3个版本的服务端程序和2个版本的客户端程序可供选择。

由于通信协议是兼容的，任意一个服务端可以混搭任意一个客户端使用，提供最高的自由度。（服务端本质上是一个“网页”，更新时走的是HTTP协议）

| 服务端                               | 客户端                                  |
| ------------------------------------ | --------------------------------------- |
| 1. 静态服务端（大佬或者巨佬）        | 1. 正式版客户端（有一定计算机基础用户） |
| 2. PHP服务端（有一定计算机基础用户） | 2. Jar版客户端（傻瓜用户）              |
| 3. 单文件服务端（傻瓜用户）          |                                         |


### 教你如何选择

<!-- tabs:start -->

#### **客户端**

+ `Jar版客户端`：如果你只想简单地更新客户端文件，不想做过多复杂配置
+ `正式版客户端`：需要自定义界面，配合启动器一键启动，使用内置公告栏等高级功能

<details>
<summary auto>详细对比</summary>

正式版优势：

1. 支持自定义公告栏
2. 支持自定义界面
3. 支持后调用指令
4. 支持错误信息引导
5. 完整Chromium嵌入，支持cookies持久化

Jar版本的优势：

1. Jar格式打包跨平台，32/64位系统，甚至能兼容WinXp
2. 只有核心更新功能，超小体积（5Mb左右）
3. 简单易用，适合ClientUpdater/FileSA远古项目的老用户使用习惯
4. 极低杀软误报
5. 支持配置文件内置到Jar包体里

</details>

#### **服务端**

`小型规模服务器`或者`朋友联机`：推荐使用**单文件服务端**，单文件免安装，随时启动停止，也不需要和复杂的HTTPSERVER打交道。当然你照样也可以使用**PHP端**或**静态端**，如果你的计算机经验比较丰富的话。

单文件服务端能承受的并发有限，建议用于朋友间联机，或者小规模服务器。如果是正式环境，还是建议使用PHP端或者静态端来提升并发性能

---

`中型规模服务器`：推荐使用**PHP端**或**静态端**，具体用哪个可以按实际情况来定夺，**PHP端**偏易配置，但是并发上可能不及静态端，而**静态端**则正好相反，适合高并发，但是配置稍微繁琐一些。如果你有现成的虚拟主机，宝塔环境那么可以用PHP端！

如果你不熟悉对象存储或者内容分发网络，建议使用PHP服务端

如果是熟悉Git的开发者用户，可以点击[这里](https://github.com/updater-for-minecraft/StaticServerForPages)查看利用Pages服务来部署静态端的例子，完全免费，不用买域名，而且可用带宽大，不需要备案。（当然代价是需要会Git的基本操作）

---

`大规模服务器`推荐静态服务端，并部署在内容分发网络或者对象存储（目前支持阿里和腾讯两家的对象存储）上，可以减轻服务器的带宽压力，将昂贵的带宽全部用于Minecraft服务端上以提升承载人数上限。

如果你有国内备案的话，建议部署到内容分发网络，进一步提升下载带宽和降低流量资费

<!-- tabs:end -->

### 环境要求

<!-- tabs:start -->

### **服务端**

+ `PHP服务端`：PHP7.2+，不建议使用PHP8.0（适合：PHP开发者或者有过建站经验的服主）
+ `静态服务端`：任意HTTP服务器（适合：内容分发网络、对象存储等高并发环境）
+ `单文件服务端`：Java 8或更高，使用起来最简单，免安装开箱即用（适合**小白和尝鲜用户**）

HTTP服务器推荐：[Nginx](https://nginx.org)、[Apache](https://httpd.apache.org)、[IIS](https://www.iis.net)、[宝塔](https://www.bt.cn)等，不同类型的服务端在功能上没有任何区别，只是使用方式不同而已

### **客户端**

+ `正式版客户端`：Windows7 x64或以上（不支持32位！）
+ `Jar版客户端`：Java 8或更高

<!-- tabs:end -->

## 下载安装

下载请跳转到[MCBBS贴内](https://www.mcbbs.net/thread-711833-1-1.html)，或者[点击这里](https://jq.qq.com/?_wv=1027&k=PqAEtn39)加入【文件更新助手官方交流群】 925057600 从群文件获取(同步更新)，或者前往[GithubRelease](#开源地址)下载

对应的教程：[PHP服务端](PHPServerInstallation.md) / [静态服务端](StaticServerInstallation.md) / [单文件服务端](LittleServerInstallation.md)（也可以随时从右上角的导航栏跳转）

---

单文件服务端和Jar客户端视频教程：https://www.bilibili.com/video/BV1QL411u7Aj

<div class="bilibli-video-wrapper"><iframe src="//player.bilibili.com/player.html?bvid=BV1QL411u7Aj&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div>


## 技术支持

[RunningIntoTrouble.md](RunningIntoTrouble.md ':include')

## 版本升级

在下面列出的各个版本号区间内，可以直接替换文件来升级到新版而无需重新配置，但如果你现有版本和将要升级的版本不再同一个区间里，那么就需要完全重头开始安装配置

| 正式版客户端 | Jar版客户端  | 服务端   |
| ------------ | ------------ | -------- |
| 3.0          | 0.0.1\~0.0.4 | 3.2\~3.6 |
| 3.1.x        | 1.0          | 3.7      |

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
