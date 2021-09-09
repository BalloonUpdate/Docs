## 单文件服务端

1. 把整个`单文件服务端`文件夹解压到桌面上（或者其它任何地方）

![image-20210822232737615](assets/littleserver-all-files.png)

| 文件             | 用途                                   |
| ---------------- | -------------------------------------- |
| res              | 存放要参与更新的文件                   |
| config.yml       | 服务端配置文件                         |
| LittleServer.exe | 服务端主程序文件                       |
| 启动.bat         | 启动服务端主程序的脚本（推荐这样启动） |

2. 将要更新文件，比如模组文件，复制到`res/.minecraft/mods/`里面（`.minecraft/mods/`目录请自行创建）

![image-20210822233040650](assets/littleserver-inside-mods.png)

3. 将其它要参与更新的文件同样按上面的方法，复制到对应的目录上（比如Vexview的贴图复制到`res/.minecraft/vexview/textures/`下）
4. 编辑服务端配置文件`config.yml`，在`paths`下写上所有需要参与更新路径，默认只有一个`mods`文件夹

```yaml
# 修改监听地址和监听端口，多网卡环境请自行指定对应的IP
# 如果端口有冲突，请换成其它端口
address: 127.0.0.1
port: 8850

# 更新模式，建议保持默认
mode: common
# 参与更新的路径，一行一个，可以写多个
paths:
  - .minecraft/mods
```

更多示例可以参考[这里](ServerConfigurationExamples.md)

5. 到这里服务端配置完毕，然后是客户端

## 客户端安装

!> 在安装之前，务必备份原有客户端，以防配置出错误删文件！

1. 下载并解压客户端zip包，把主程序和配置文件一起解压到`.minecraft/updater`目录下（需要手动创建`updater/`目录）

![client-inside-updater](assets/client-inside-updater.png)

2. 打开并配置`updater.yml`，并将单文件服务端输出API地址复制粘贴到api选项后面

3. 如果你喜欢，可以把客户端程序，移动到启动器旁边，并且可以改成别的文件名（比如：`点击更新mods.exe`等等），但是，客户端程序只有放在以下路径才能正常工作：`.minecraft`同级目录(启动器旁)、`.minecraft/`下，`.minecraft/updater/`下

![out_mcdir](assets/out_mcdir.png)

5. 到这里所有的安装工作已经结束了，开始启动测试效果吧！

## 后续维护

得益于软件的同步式更新架构，后续的客户端维护其实是非常简单的：

+ 给客户端新增文件：在服务端**添加**对应的文件，客户端那边下次启动时，就会同步更新（即时生效）
+ 删除客户端的文件：在服务端**删除**对应的文件，客户端那边下次启动时，就会同步更新（即时生效）
+ 更新客户端的文件：在服务端**替换**对应的文件，客户端那边下次启动时，就会同步更新（即时生效）

不仅仅是文件，文件夹也是和上面一样的更新逻辑。这样，服务端的内容，就会自动同步到客户端那边。如果没有按预期更新，请检查一下对应的文件/目录是否忘了添加更新规则。

## 高级功能

[AdvancedTopic.md](AdvancedTopic.md ':include')