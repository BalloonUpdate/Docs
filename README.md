## Minecraft文件更新助手帮助文档

更新客户端小程序，Mod服好帮手

!> 注意：版本3.x与2.x完全不兼容，请重新安装。2.x文档链接请[点击这里](历史版本文档.md)

<details>
<summary>点击展开v3.0.0的发行说明</summary>
不知不觉距离第一个版本发布已经过去5年了，首先感谢各位老板们在这些日子里的支持。

3.0主要以重写为主，之前2.0使用json配置文件，但很多人都不熟悉json的语法，很容易漏掉列表末尾的逗号，现在3.0使用yaml格式配置文件，只要有过开服经验的人，都能轻易上手。

3.0也修复了2.0遗留的兼容/报毒问题，现在3.0使用Electron框架构建，由c/c++驱动，不依赖.net，误报的概率能降低很多，兼容性也会提升不少。

另外比较重要的一个改变是：3.0移除了自升级功能，这会使得软件配置起来更加简单，不用再跟复杂的概念打交道，同时还会有一些额外好处，比如启动速度提升，文件大小变小，易安装和配置等优势。

本软件同时也是一个公益项目，所有相关源代码完全开源，欢迎各大开发者给项目提出问题，意见。
</details>

### 环境要求

<!-- tabs:start -->

#### **服务端**

不同类型服务端是为了能搭建在不同环境下所做出来的，功能完全一致，只需要选择**其中一种**

+ `PHP服务端`：PHP7.2+（适合：PHP开发者或者有过建站经验的服主）
+ `静态服务端`：任意HTTP服务器（适合：需要上CDN、对象存储等高性能环境）

HTTP服务器推荐：Nginx、Apache、IIS、宝塔、Phpstudy、Http File Server等

<details>
<summary>个人推荐方案（如果你无法做出选择的话）</summary>

`小型规模服务器`或者`朋友联机`的话使用php服务端和静态服务端都可以。如果有现成的宝塔等环境的话，建议选择php服务端，毕竟开箱即用，配置也特别方便！但如果你和我一样是个白嫖党的话，喜爱白嫖各种pages服务当做更新服务器，那可以使用静态服务端，好处是不花一分钱，速度还不错，缺点是部分服务不稳定，有时候会出现无法访问的情况。

`中大规模服务器`的话，推荐静态服务端，一是不用安装在vps上和mc服务端争抢宝贵的带宽（买过服务器的应该都知道带宽价格极其昂贵），二是下载速度有保证，像阿里和腾讯一般都是1000mbps的下行带宽，流量约1GB/0.5元，用多少算多少，也没有月末清理的规定，更新频率少的话，10块钱能用近大半年。如果你有国内备案的话，建议直接上CDN，流量费可以直接降低一半，1GB/0.25元，

`超大规模服务器`应该已经有合适的专业解决方案了，我在此就不献丑了。

</details>

#### **客户端**

Windows7 x64或以上

需要安装`Visual C++ Redistributable Packages for Visual Studio 2015`(俗称VC++运行库)或更高版本

微软官方[下载页面](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0)，或单独下载：

[2015-2019_x86](https://aka.ms/vs/16/release/vc_redist.x86.exe)

[2015-2019_x64](https://aka.ms/vs/16/release/vc_redist.x64.exe)

[2015-2019_arm64](https://aka.ms/vs/16/release/VC_redist.arm64.exe)

> 如果出现360误报，请手动加入白名单，如不放心，可以查阅源代码（updater是全开源项目）

<!-- tabs:end -->

### 下载安装

请跳转到MCBBS贴内https://www.mcbbs.net/thread-711833-1-1.html

对应的教程：[PHP服务端](PHP服务端安装.md ':target=_blank') / [静态服务端](静态服务端安装.md ':target=_blank')（也可以随时从右上角跳转）

遇到问题请首先参考[常见问题解答](FAQ.md ':target=_blank')，或通过下面的方式获取技术支持。

### 反馈问题

1. [点击这里](https://jq.qq.com/?_wv=1027&k=PqAEtn39)加入我们的官方群聊【文件更新助手官方交流群】 925057600  (免审核，群文件同步更新下载地址)
3. 发邮件aprilforests@qq.com

反馈问题时，务必带上以下内容：

1. 问题详细描述
2. 问题截图（如果有）
3. 日志文件`.minecraft/updater/updater.log`（此项可选）

为保护隐私，日志文件不要发到群文件里，在截图时记录将IP/域名打码！

### 参与贡献

由于个人精力有限，代码中难免会出现错误、疏忽、遗漏，还需要在大家的帮助下不断完善

如果你发现了问题，欢迎前来GitHub仓库提交Issue、PullRequest，或者亲自告诉我，我会不断改进

如果帮助文档中出现了错误或者是不适合的地方，同样欢迎大家进行修改，提交PR！

### 爱发电主页
https://afdian.net/@aprilforest

做开源项目不易，如果你有经济能力，欢迎过来赞助一下哟！（下面的图片也可以点击）

[![3c9256efc9f19a2044ac747f1804673a_w1920_h800_s2638](README.assets/3c9256efc9f19a2044ac747f1804673a_w1920_h800_s2638.jpg)](https://afdian.net/@aprilforest)

### 开源地址

喜欢的话，欢迎前来给一颗Star呀`(｀・ω・´)`

+ 文档：https://github.com/updater-for-minecraft/Docs
+ 客户端：https://github.com/updater-for-minecraft/Client
+ 服务端：https://github.com/updater-for-minecraft/Server
+ 小工具：https://github.com/updater-for-minecraft/Tool
