## 文件更新助手帮助文档（版本4）

—— 更新客户端小程序，Mod服好帮手（旧版本文档[点击这里](#历史版本文档)跳转）

官方企鹅群：[【更新助手官方群】](https://jq.qq.com/?_wv=1027&k=PqAEtn39) 925057600 。欢迎过来聊天吹水，讨论技术，和提出建议

如果访问出现 404 - not found，请清理缓存后再试

## 安装教程

文件更新助手是一个服务端——客户端架构的程序，需要两者都安装才能正常使用。服务端程序和客户端程序有不同的发行版可选择，双端的通信协议均是兼容的，可以自由混搭。同时不同类型的发行版对计算机知识的要求并不相同，请根据自己的水平**合理选择**，尽量不要**折磨自己**。

服务端发行版：

1. [单文件服务端](server/light-server.md)（**小白推荐**。jar格式的单文件服务端，自带http-server，使用起来最为方便）
2. [PHP服务端](server/php-server.md)（运行在php环境里的服务端，适合有网站主机或者宝塔等环境的用户）
3. [静态服务端](server/static-server.md)（纯静态服务端，适合对象存储或者内容分发网络场景）

客户端发行版：

1. [Jar客户端](client/jar-client.md)（**小白推荐**。支持PC端、安卓Boat端等多个平台、以及任意启动器的一键启动）
2. [Exe客户端](client/exe-client.md)（使用Electron制作的客户端，内置浏览器环境，可以自定义全部的界面，仅支持Windows系统）

附加链接（选阅部分）：

1. [新的对象存储上传工具](server/tool-utos.md)
2. [老的对象存储上传工具](server/tool-oss.md)（原对象存储小工具）
3. [服务端配置参考](server/reference.md)

## 下载安装

下载请跳转到[MCBBS贴内](https://www.mcbbs.net/thread-711833-1-1.html)，或者加入我们的官方企鹅群 925057600 从群文件获取（同步更新），或者前往[Github Release](#开源地址)手动下载

## 常见问题解答FAQ

[常见问题解答（FAQ）](faq.md)

## 版本升级

如果你的版本号在下面列出的同一行区间内，可以直接替换文件来升级到新版而无需重新修改配置文件。如果任意一个（客户端、服务端）跨了版本号区间，就需要全部重新配置

| 版本区间 | Exe客户端 | Jar版客户端  | 服务端   |
| -------- | --------- | ------------ | -------- |
| 区间一   | 3.0       | 0.0.1\~0.0.4 | 3.2\~3.6 |
| 区间二   | 3.1       | 1.0          | 3.7      |
| 区间三   | 4.x       | 4.x          | 4.x      |

## 参与贡献

由于个人精力有限，代码中难免会出现错误、疏忽、遗漏，还需要在大家的帮助下不断完善

如果你发现了问题，欢迎前来GitHub仓库提交Issue、PullRequest，或者亲自告诉我，我会不断改进

如果帮助文档中出现了错误或者是不适合的地方，同样欢迎大家进行修改，提交PR！

## 爱发电主页

https://afdian.net/@aprilforest

做开源项目不易，如果你有经济能力，欢迎过来赞助一下哟！

文件更新助手是一个开源软件，但不提供免费的技术支持，如果需要专业售后服务，请前往爱发电主页了解详情

## 开源地址/更新记录

更新助手（BalloonUpdate）是一个完整的文件更新解决方案，提供了一整套文件更新生态。由多个仓库组成，所有的源代码完全开源，欢迎各位萌新大佬前来学(bai)习(piao)

| 项目                      | 仓库链接                                                     | 更新记录                                                     |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 帮助文档                  | [BalloonUpdate/Docs](https://github.com/BalloonUpdate/Docs)  | 没有更新记录                                                 |
| WindowsExe文件打包器      | [BalloonUpdate/LittleWrapper](https://github.com/BalloonUpdate/LittleWrapper) | [前往Release页面](https://github.com/BalloonUpdate/LittleWrapper/releases) |
| Exe客户端                 | [BalloonUpdate/ExeClient](https://github.com/BalloonUpdate/ExeClient) | [前往Release页面](https://github.com/BalloonUpdate/ExeClient/releases) |
| Jar客户端                 | [BalloonUpdate/JarClient](https://github.com/BalloonUpdate/JarClient) | [前往Release页面](https://github.com/BalloonUpdate/JarClient/releases) |
| 静态服务端小工具（旧）    | [BalloonUpdate/Tool](https://github.com/BalloonUpdate/Tool)  | 没有更新记录                                                 |
| PHP服务端                 | [BalloonUpdate/PhpServer](https://github.com/BalloonUpdate/PhpServer) | 没有更新记录                                                 |
| 单文件服务端              | [BalloonUpdate/LittleServer](https://github.com/BalloonUpdate/LittleServer) | [前往Release页面](https://github.com/BalloonUpdate/LittleServer/releases) |
| 静态服务端结构文件工具    | [BalloonUpdate/StructureTool](https://github.com/BalloonUpdate/StructureTool) | [前往Release页面](https://github.com/BalloonUpdate/StructureTool/releases) |
| 静态服务端对象存储工具    | [BalloonUpdate/ObjectStorageServiceUtility](https://github.com/BalloonUpdate/ObjectStorageServiceUtility) | [前往Release页面](https://github.com/BalloonUpdate/ObjectStorageServiceUtility/releases) |
| ~~Jar客户端一键启动工具~~ | ~~[BalloonUpdate/BatchRunner](https://github.com/BalloonUpdate/BatchRunner)~~（项目已弃用） | 核心功能已集成进Jar客户端                                    |

## 文档的历史版本

https://github.com/BalloonUpdate/Docs/branches

