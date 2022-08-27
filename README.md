## 文件更新助手帮助文档（版本4）

—— 更新客户端小程序，Mod服好帮手

官方企鹅群：[【更新助手官方群】](https://jq.qq.com/?_wv=1027&k=PqAEtn39) 925057600 。欢迎过来聊天吹水，讨论技术，和提出建议。如果访问页面出现 404 - not found，请清理缓存后再试

!> 这是新版的文档，如果你在找旧文档（Exe客户端、旧版PHP服务端等），点击[这里](https://github.com/BalloonUpdate/Docs/tree/old-servers)跳转到GitHub仓库查阅历史分支。更早的文档，请从[此处](https://github.com/BalloonUpdate/Docs/branches)查阅

## 介绍

文件更新助手是一个使用HTTP协议的服务端/客户端架构的程序，需要两者都安装才能正常使用。服务端程序和客户端程序有不同的发行版可选择，且通信协议互相兼容，可以自由混搭。

在使用之前务必确保你了解这些内容：YAML语法、JSON语法、IP、端口、域名、端口、超文本传输协议中常见的错误代码等，了解这些内容会极大地增加诊断问题的效率。

如果你遇到任何问题，在问人之前，请首先查阅[常见问题解答FAQ](faq.md)，这个页面能解决你遇到的绝大部分问题，如果仍然无法解决，再考虑向他人求助。

## 安装教程

文档分两部分，**手册 Manual** 和 **参考 Reference**、手册是教你快速上手的教程。参考是解锁高级玩法的说明书。

如果你是第一次用这个软件，那么只看手册部分就好了。当然也不是每个手册都有对应的参考页面的。

服务端发行版：

1. [单文件服务端（手册）](server/little-server-manual.md)（**小白推荐**。jar格式的单文件服务端，开箱即用无任何依赖）
3. [静态服务端（手册）](server/static-server-manual.md)（适合对象存储等纯静态环境、也可用于PHP网站主机或者宝塔环境）

客户端发行版：

1. [Jar客户端（手册）](client/jar-client-manual.md)（**小白推荐**。支持PC端、安卓Boat端等多个平台、以及任意启动器的一键启动）
3. [Forge模组客户端（手册）](client/forge-mod-client-manual.md)（基于Jar客户端开发，猫反友好）

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

## 爱发电主页

https://afdian.net/@aprilforest

文件更新助手是一个开源软件，做开源项目不易，如果你有经济能力，欢迎过来赞助一下哟！

## 仓库地址

| 项目                       | 仓库链接                                                     | 更新记录                                                     |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 帮助文档                   | [BalloonUpdate/Docs](https://github.com/BalloonUpdate/Docs)  | 没有更新记录                                                 |
| Jar客户端                  | [BalloonUpdate/JarClient](https://github.com/BalloonUpdate/JarClient) | [前往Release页面](https://github.com/BalloonUpdate/JarClient/releases) |
| ForgeMod客户端             | [BalloonUpdate/ModClient](https://github.com/BalloonUpdate/ModClient) | [前往Release页面](https://github.com/BalloonUpdate/ModClient/releases) |
| 单文件服务端               | [BalloonUpdate/LittleServer](https://github.com/BalloonUpdate/LittleServer) | [前往Release页面](https://github.com/BalloonUpdate/LittleServer/releases) |
| WindowsExe文件打包器       | [BalloonUpdate/LittleWrapper](https://github.com/BalloonUpdate/LittleWrapper) | [前往Release页面](https://github.com/BalloonUpdate/LittleWrapper/releases) |
| ~~Exe客户端~~              | ~~[BalloonUpdate/ExeClient](https://github.com/BalloonUpdate/ExeClient)~~（不再有新特性） | [前往Release页面](https://github.com/BalloonUpdate/ExeClient/releases) |
| ~~静态服务端小工具（旧）~~ | ~~[BalloonUpdate/Tool](https://github.com/BalloonUpdate/Tool)~~（已被其它功能替代） | 没有更新记录                                                 |
| ~~PHP服务端~~              | ~~[BalloonUpdate/PhpServer](https://github.com/BalloonUpdate/PhpServer)~~（已集成进静态服务端） | 没有更新记录                                                 |
| ~~静态服务端结构文件工具~~ | ~~[BalloonUpdate/StructureTool](https://github.com/BalloonUpdate/StructureTool)~~（已被其它功能替代） | [前往Release页面](https://github.com/BalloonUpdate/StructureTool/releases) |
| ~~静态服务端对象存储工具~~ | ~~[BalloonUpdate/ObjectStorageServiceUtility](https://github.com/BalloonUpdate/ObjectStorageServiceUtility)~~（已被其它功能替代） | [前往Release页面](https://github.com/BalloonUpdate/ObjectStorageServiceUtility/releases) |
| ~~Jar客户端一键启动工具~~  | ~~[BalloonUpdate/BatchRunner](https://github.com/BalloonUpdate/BatchRunner)~~（已被其它功能替代） | 核心功能已集成进Jar客户端                                    |
