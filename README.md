## updater帮助文档（v3.0.0）

更新客户端小程序，Mod服好帮手

!> 注意：v3.0.0与v2.x完全不兼容，请参考文档重新进行安装

### 0. 关于3.0.0版本的发行说明

不知不觉距离updater第一个版本发布已经过去5年了，感谢各位服主/用户/大佬们在这些日子里以来的支持和陪伴。一眨眼3.0.0版本也已经发布了，3.x可能是最后一个大版本，因为我也即将面临工作的压力，闲余时间越来越少。updater同时也是一个公益项目，所有相关源代码完全开源，欢迎各大开发者给项目提出问题，意见。

v3.0.0主要以重写/修复为主，之前v2.x使用json配置文件，但很多人都不熟悉json语法，很容易漏掉列表末尾的逗号，现在v3.0.0使用yaml格式配置文件，只要有过开服经验的人，都能轻易上手。

v3.0.0同样修复了v2.x遗留的兼容问题，有很多人向我反映，在自己的电脑上没问题，但是玩家电脑上各种报错。这个问题可能与pywebview依赖winform有关，现在v3.0.0使用electron框架构建，由c/c++驱动，不依赖.net，兼容性会好很多。

v3.0.0也移除了自身热升级功能，考虑到updater项目并不是一个更新特别频繁的项目，而加入热升级同时又会增加配置的复杂性和不稳定性，所以v3.0.0不再包含包含自身热升级的功能，这同时也会带来一些好处，比如启动速度提升，服务端文件变小，单文件易安装和配置等。

### 1. 环境要求

#### 客户端

Windows7 x64或以上

#### 服务端

有2种服务端类型可供选择，不同类型服务端功能完全一致，建议根据实际环境选择**其中一种**就行

+ PHP服务端：PHP7.2+
+ 静态服务端：任意HTTP服务器

HTTP服务器推荐：Nginx、Apache、IIS、宝塔、Phpstudy、Http File Server等

---

+ `PHP服务端`适合：PHP开发者或者有过建站经验的服主
+ `静态服务端`适合：需要上CDN、对象存储等高性能环境

### 2. 下载文件

下载链接请点击右上角（把网页往上滑，不是那个绿色猫猫图标）

### 3. 安装指南

点击对应的安装教程：[PHP服务端](PHP服务端安装.md ':target=_blank') / [静态服务端](静态服务端安装.md ':target=_blank')

### 4. 遇到问题

首先参考[常见问题解答](FAQ.md ':target=_blank')，如不能解决，请加qq群 925057600 免审核。或者直接私聊群主qq(免验证)

也可以发邮件aprilforests@qq.com和MCBBS站内私信

## 开源地址

喜欢的话，欢迎前来给一颗Star呀`━(*｀∀´*)ノ亻!`

+ 文档：https://github.com/updater-for-minecraft/Docs
+ PHP服务端：https://github.com/updater-for-minecraft/PHPServer
+ 静态服务端：https://github.com/updater-for-minecraft/StaticServer
+ 客户端：https://github.com/updater-for-minecraft/Client
+ 小工具：https://github.com/updater-for-minecraft/UtilityTool
