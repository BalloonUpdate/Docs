## 单文件服务端

!> 安装时请务必仔细阅读教程，不要自作聪明跳过任何步骤！

1. 环境要求：安装Java 8或者以上版本
2. 把整个`单文件服务端`文件夹解压到桌面上（或者其它任何地方）
3. 把你Minecraft客户端里**所有**的模组文件全部复制到`res/.minecraft/mods/`里面（目录请自行创建），注意不是只复制需要新增的文件，而是要复制所有文件

4. 将其它要更新的文件同样按上面的方法，复制到`res`目录里对应的路径的目录上（比如Vexview的贴图复制到`res/.minecraft/vexview/textures/`下，其它文件同理）
5. 编辑服务端配置文件`config.yml`，在`common_mode`下写上所有需要参与更新路径

```yaml
# 监听地址，高级参数，请勿随意修改
# address: 0.0.0.0
# 监听端口，如果冲突了请换一个别的端口
port: 8850

# 这里填写要更新的文件
# 路径分隔符只能使用正斜线，如果用反斜线出了问题请自行解决！
common_mode:
  - .minecraft/mods/*.jar
  - .minecraft/vexview/textures/**

# 不用填写
once_mode: []
```

> 配置文件参考和更多示例请[点击这里](ServerConfigurationReference.md)（推荐阅读！）。注意每次修改`config.yml`后，需要重启单文件服务端才会生效。如果仅仅是修改`res`目录里要更新的文件，则不用重启

6. 验证服务端是否正确工作（这一步很重要，请不要跳过）
7. 使用浏览器打开黑框里复制出来的API地址，如果浏览器显示了类似下面代码框里的`json`格式的内容（实际内容可能不完全相同）。那么恭喜，服务端配置无误！

```json
{
    "common_mode": [
        ".minecraft/**"
    ],
    "once_mode": [],
    "update": "res"
}
```

如果不是，请自行排查原因，因为这大概率不是程序BUG，而是你网络环境的问题！

如果一切配置正确，那么到这里服务端配置完毕，接下来请参考下方的客户端安装章节

---

有个地方要注意，Windows系统下使用时，如果误进入了`选择`模式，如下图，会导致程序卡死。请按Esc或者点击右键来退出

![image-20220105225843121](LittleServerInstallation.assets/image-20220105225843121.png)



[ForbiddenChars.md](ForbiddenChars.md ':include')

## 客户端安装

!> 在安装之前，务必备份原有客户端，以防配置出错误删文件！

<!-- tabs:start -->

### **正式版客户端**

[OfficialClientInstallation.md](OfficialClientInstallation.md ':include')

### **Jar版客户端**

[JarClientInstallation.md](JarClientInstallation.md ':include')

<!-- tabs:end -->

## 遇到问题/报错怎么办?

[RunningIntoTrouble.md](RunningIntoTrouble.md ':include')

## 后续维护

得益于软件的同步式更新架构，后续的客户端维护其实是非常简单的：

+ 给客户端新增文件：在服务端**添加**对应的文件，客户端那边下次启动时，就会同步更新（即时生效）
+ 删除客户端的文件：在服务端**删除**对应的文件，客户端那边下次启动时，就会同步更新（即时生效）
+ 更新客户端的文件：在服务端**替换**对应的文件，客户端那边下次启动时，就会同步更新（即时生效）

不仅仅是文件，文件夹也是和上面一样的更新逻辑。这样，服务端的内容，就会自动同步到客户端那边。如果没有按预期更新，请检查一下对应的文件/目录是否忘了添加更新规则。

## 高级功能

[AdvancedTopic.md](AdvancedTopic.md ':include')

## 视频教程

单文件服务端和Jar客户端视频教程：https://www.bilibili.com/video/BV1QL411u7Aj

<div class="bilibli-video-wrapper"><iframe src="//player.bilibili.com/player.html?bvid=BV1QL411u7Aj&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div>