## Minecraft文件更新助手帮助文档

更新客户端小程序，Mod服好帮手

!> 注意：版本3.x与2.x完全不兼容，请重新安装。2.x文档链接请[点击这里](HistoricalVersions.md)

<details>
<summary auto>v3.0发行说明</summary>

不知不觉距离第一个版本发布已经过去5年了，首先感谢各位老板们在这些日子里的支持。

3.0主要以重写为主，之前2.0使用json配置文件，但很多人都不熟悉json的语法，很容易漏掉列表末尾的逗号，现在3.0使用yaml格式配置文件，只要有过开服经验的人，都能轻易上手。

3.0也修复了2.0遗留的兼容/报毒问题，现在3.0使用Electron框架构建，由c/c++驱动，不依赖.net，误报的概率能降低很多，兼容性也会提升不少。

另外比较重要的一个改变是：3.0移除了自升级功能，这会使得软件配置起来更加简单，不会再遇到过程极其复杂的配置方法了，同时还会有一些额外好处，比如启动速度提升，文件大小变小，易安装和配置等优势。

本软件同时也是一个开源项目，所有相关源代码完全开源，欢迎各大开发者给项目提出问题，意见。
</details>

## 服务端环境要求

服务端本质上是一个“网页”，依赖于HTTP服务器运行，更新走的是HTTP协议

之所以要做出不同类型的服务端，是为了能够适配更多的运行环境。功能完全一致，只需要选择**其中一种**

+ `PHP服务端`：PHP7.2+，不建议使用PHP8.0（适合：PHP开发者或者有过建站经验的服主）
+ `静态服务端`：任意HTTP服务器（适合：内容分发网络、对象存储等高并发环境）
+ `单文件服务端`：仅需Win7x64或以上，使用起来最简单，单文件免安装开箱即用（适合：**计算机小白和尝鲜用户**）

HTTP服务器推荐：[Nginx](https://nginx.org)、[Apache](https://httpd.apache.org)、[IIS](https://www.iis.net)、[宝塔](https://www.bt.cn)等

<details>
<summary>个人推荐方案（仅做参考）</summary>

`小型规模服务器`或者`朋友联机`：推荐使用**单文件服务端**，单文件免安装，随时启动停止，也不需要和复杂的HTTPSERVER打交道。尤其是计算机小白，个人是非常推荐用这个端的，当然你照样也可以使用**PHP端**或**静态端**，如果你有相关经验的话。

单文件服务端能承受的并发相当有些，只能用于朋友间联机，或者小规模服务器。正式环境建议使用PHP服务端或者静态服务端来提升并发性能

---

`中型规模服务器`：推荐使用**PHP端**或**静态端**，具体用哪个可以按实际情况来定夺，**PHP端**偏易配置，但是并发上可能不及静态端，而**静态端**则正好相反，适合高并发，但是配置稍微繁琐一些。如果你有现成的宝塔环境，可以用PHP端！如果你是个白嫖怪的话，可以用静态端，然后白嫖GitPages服务来当做更新服务器，不用买域名服务器，全免费白嫖，下载速度还不赖（但需要Git相关知识）。

如果你不熟悉对象存储或者内容分发网络，建议使用PHP服务端

---

`大规模服务器`推荐静态服务端，并部署在内容分发网络上，一是不用安装在vps上和mc服务端争抢宝贵的带宽（买过服务器的应该都知道带宽价格极其昂贵），二是下载速度有保证，像阿里（1Gbps）和腾讯（1.5Gbps）都拥有超大下行带宽，流量约1GB/0.5元，用多少算多少，也没有月末清理的规定，更新频率少的话，10块钱能用近大半年。

如果你有国内备案的话，建议使用CDN做更新，流量费能降一半，1GB/0.25元

---

`超大规模服务器`应该已经有自己的专业解决方案了，我就不献丑了。

</details>

## 客户端环境要求

Windows7 x64或以上（不支持32位！）

需要安装`Visual C++ Redistributable Packages for Visual Studio 2015`（俗称VC++运行库）或更高版本

微软官方[集合下载页面](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0)，或单独下载：[2015-2019_x86](https://aka.ms/vs/16/release/vc_redist.x86.exe)、[2015-2019_x64](https://aka.ms/vs/16/release/vc_redist.x64.exe)、[2015-2019_arm64](https://aka.ms/vs/16/release/VC_redist.arm64.exe)

> 如果出现360误报，请手动加入白名单，如不放心，可以查阅源代码（updater是全开源项目）

## 下载安装

下载请跳转到[MCBBS贴内](https://www.mcbbs.net/thread-711833-1-1.html)，或者[点击这里](https://jq.qq.com/?_wv=1027&k=PqAEtn39)加入【文件更新助手官方交流群】 925057600 从群文件获取(同步更新)

对应的教程：[PHP服务端](PHPServerInstallation.md) / [静态服务端](StaticServerInstallation.md) / [单文件服务端](LittleServerInstallation.md)（也可以随时从右上角的导航栏跳转）

单文件服务端有5分钟快速入门视频教程，可以跳转至B站观看：https://www.bilibili.com/video/BV1jh411q7Ww

## 问题反馈&技术支持

1. 首先参考[常见问题解答](FrequenctlyAskedQuestions.md)
2. [点击这里](https://jq.qq.com/?_wv=1027&k=PqAEtn39)加入【文件更新助手官方交流群】 925057600 获取技术支持  (免审核，有问题请直接在群里@四月浅森）
3. 发邮件asforest@qq.com

反馈问题时，务必带上以下内容：

1. 问题详细描述
2. 问题截图（如果有）
3. 日志文件`.minecraft/updater/updater.log`（可选）

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

