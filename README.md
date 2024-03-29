## 文件更新助手帮助文档（版本4）

—— 更新客户端小程序，Mod服好帮手

官方企鹅群，欢迎过来聊天，讨论，和提出建议：

+ [【更新助手官方群】](https://jq.qq.com/?_wv=1027&k=PqAEtn39) 925057600

!> 这是新版的文档，如果你在找旧文档（Exe客户端、旧版PHP服务端等），点击[这里](https://github.com/BalloonUpdate/Docs/tree/old-servers)跳转到GitHub仓库查阅历史分支。更早的文档，请从[此处](https://github.com/BalloonUpdate/Docs/branches)查阅

如果访问页面出现 404 - not found，请清理缓存后再试

## 新闻

!> 更新助手的独立衍生版本[Mc Versioning](https://balloonupdate.github.io/McVersioningDocs)有文件漏更新的严重bug，请勿再使用。

更新助手的全新重写系列 [McPatch](https://balloonupdate.github.io/McPatchDocs) 已经发布，相比原版更新助手，优点如下：

1. 更新大文件时会计算文件差异，仅打包文件中有变动的部分，更新大体积文件时非常节省流量和带宽
2. 静态部署更加友好，更新包为一个json文件和一个bin文件，方便自己手动上传，不再需要静态工具
3. 除了HTTP以外，还支持SFTP更新源（SFTP更新源操作不当会有安全风险，使用之前请三思）
4. 检测文件速度快，基于版本号的更新速度更快。磁盘IO开销更小，对移动端设备更加友好
5. 不用写更新规则，发布新版本时会自动检测到哪些文件改变，并自动生成差异记录
6. 不删玩家的模组文件，玩家可以自由添加自己的mod而不用担心被误更新删除

## 介绍

文件更新助手是一个使用HTTP协议的服务端/客户端架构的程序，需要两者都安装才能正常使用。服务端程序和客户端程序有不同的发行版可选择，且通信协议互相兼容，可以自由混搭。

在使用之前务必确保你了解这些内容：YAML语法、JSON语法、IP、端口、域名、端口、超文本传输协议中常见的错误代码等，了解这些内容会极大地增加诊断问题的效率。

如果你遇到任何问题，在问人之前，请首先查阅[常见问题解答FAQ](faq.md)，这个页面能解决你遇到的绝大部分问题，如果仍然无法解决，再考虑向他人求助。

## 安装教程

文档分两部分，**手册 Manual** 和 **参考 Reference**、手册是教你快速上手的教程。参考是解锁高级玩法的说明书。

如果你是第一次用这个软件，那么只看手册部分就好了。当然一些过于简单的功能仅有手册页面，没有对应的参考页面。

服务端发行版：

1. [BalloonServer 服务端（手册）](server/balloon-server-manual.md)（**小白推荐**。Jar格式的单文件**图形化**服务端，开箱即用 + 99.9% 可视化操作 + 多线程优化！）
2. [单文件服务端（手册）](server/little-server-manual.md)（**小白推荐**。Jar格式的单文件**命令行**服务端，无其它依赖库，小体积打包，稳定可靠，适配桌面和命令行环境）
3. [静态服务端（手册）](server/static-server-manual.md)（略有门槛，适合对象存储等纯静态环境、也可用于PHP网站主机或者宝塔环境）

客户端发行版：

1. [Jar客户端（手册）](client/jar-client-manual.md)（独立软件并非模组。支持PC端、安卓端平台。以及任意启动器的一键启动）
2. [Forge模组客户端（手册）](client/forge-mod-client-manual.md)（基于Jar客户端开发，支持任意平台运行，猫反友好）

小工具（新！）：

1. [更新规则编辑器（手册）](server/rule-editor-tool-manaual.md)（以可视化点击的方式代替手写更新规则。规则尽量亲自手写，不要过度依赖编辑器）

## 版本升级

同一行区间内的版本号，客户端是可以和服务端兼容的，如果你的客户端和服务端不在同一个区间内，就无法一起使用

| 版本区间 | Jar版客户端  | 服务端   |
| -------- | ------------ | -------- |
| 区间一   | 0.0.1\~0.0.4 | 3.2\~3.6 |
| 区间二   | 1.0          | 3.7      |
| 区间三   | 4.x          | 4.x      |

## 参与贡献

由于个人精力有限，代码中难免会出现错误、疏忽、遗漏，还需要在大家的帮助下不断完善

如果你发现了问题，欢迎前来GitHub仓库提交Issue、PullRequest，或者亲自告诉我，我会不断改进

如果帮助文档中出现了错误或者是不适合的地方，同样欢迎大家进行修改，提交PR！

## 仓库地址

如果需要查阅更新记录和历史，请访问对应仓库的Release页面（部分仓库因为架构过于简单，没有更新记录）

+ [帮助文档](https://github.com/BalloonUpdate/Docs)：项目的帮助文档仓库，包含手册和参考
+ [ForgeMod客户端](https://github.com/BalloonUpdate/ModClient)（由[KasumiNova](https://github.com/KasumiNova)大佬开发）：Forge模组版本的客户端，支持任意平台，猫反友好
+ [Jar客户端](https://github.com/BalloonUpdate/JarClient)：普通客户端，是一个独立软件，支持多平台和任意三方启动器
+ [BalloonServer 服务端](https://github.com/BalloonUpdate/BalloonServer)（由[KasumiNova](https://github.com/KasumiNova)大佬开发）：图形化单文件服务端，可视化操作 + 多线程优化
+ [单文件服务端](https://github.com/BalloonUpdate/LittleServer)：命令行单文件服务端，适配大部分无桌面场景

不再维护：

+ ~~[WindowsExe文件打包器](https://github.com/BalloonUpdate/LittleWrapper)~~（不再维护）：Exe客户端打包工具
+ [~~Exe客户端~~](https://github.com/BalloonUpdate/ExeClient)~~（不再有新特性）：Electron版本客户端，支持自定义全部界面，但仅支持Windows平台
+ [~~静态服务端小工具（旧）~~](https://github.com/BalloonUpdate/Tool)~~（已被其它功能替代）：第一版的静态服务端上传工具，操作不当有误删文件的风险，不再建议使用
+ [~~PHP服务端~~](https://github.com/BalloonUpdate/PhpServer)~~（已集成进静态服务端）：PHP编写的服务端，但因为性能问题不再更新，已由静态服务端承担PHP服务端所有的功能
+ [~~静态服务端结构文件工具~~](https://github.com/BalloonUpdate/StructureTool)~~（已被其它功能替代）：第二版的静态服务端生成工具。已由最新版静态服务端整合包替代
+ [~~静态服务端对象存储工具~~](https://github.com/BalloonUpdate/ObjectStorageServiceUtility)~~（已被其它功能替代）：第二版的静态服务端上传工具。已由最新版静态服务端整合包替代
+ [~~Jar客户端一键启动工具~~](https://github.com/BalloonUpdate/BatchRunner)~~（已被其它功能替代）：初代Jar客户端的一键启动方案，因为配置复杂容易出错，已由更简单方便的新启动方式替代
