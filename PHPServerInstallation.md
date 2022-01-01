## PHP服务端

1. 把`PHP服务端`文件夹里的所有文件，解压到网站根目录（一共四个文件）

![image-20210822235615564](assets/phpserver-all-files.png)

| 文件      | 用途                                       |
| --------- | ------------------------------------------ |
| res       | 存放要参与更新的文件                       |
| index.yml | 服务端配置文件（图中为`config.yml`未更正） |
| index.php | 服务端主程序文件                           |
| Spyc.php  | 服务端程序的依赖文件                       |

2. 将要更新文件，比如`mods`目录里面**所有**的模组文件，复制到`res/.minecraft/mods/`里面（`.minecraft/mods/`目录请自行创建），注意不是只复制需要新增的文件，而是要复制所有文件

![image-20210823103019711](assets/phpserver-inside-mods.png)

3. 将其它要参与更新的文件同样按上面的方法，复制到对应的目录上（比如Vexview的贴图复制到`res/.minecraft/vexview/textures/`下）
4. 编辑服务端配置文件`index.yml`，在`common_mode`和`once_mode`下写上所有需要参与更新路径，默认只有一个`mods`文件夹和vexview贴图目录

```yaml
# common_mode适合用来更新常规文件，详情请参阅服务端配置文件参考
# 路径分隔符只能使用正斜线
common_mode:
  - .minecraft/mods/*.jar
  - .minecraft/vexview/textures/*

# common_mode适合用来补全配置文件，详情请参阅服务端配置文件参考
# 路径分隔符只能使用正斜线
once_mode: []

# 使用php服务端需要将下面paths里面所有单反斜杠\全部换成双反斜杠\\
```

关于`common_mode`和`once_mode`的具体用法和更多示例可以点击[这里](ServerConfigurationReference.md)

5. 到这里，服务端配置完毕，然后是客户端

[ForbiddenChars.md](ForbiddenChars.md ':include')

## 客户端安装

<!-- tabs:start -->

### **正式版客户端**

[OfficialClientInstallation.md](OfficialClientInstallation.md ':include')

### **Jar版客户端**

[JarClientInstallation.md](JarClientInstallation.md ':include')

<!-- tabs:end -->

### 遇到问题/技术支持

[RunningIntoTrouble.md](RunningIntoTrouble.md ':include')

### 后续维护

得益于软件的同步式更新架构，后续的客户端维护其实是非常简单的：

+ 给客户端新增文件：在服务端**添加**对应的文件，客户端那边下次启动时，就会同步更新
+ 删除客户端的文件：在服务端**删除**对应的文件，客户端那边下次启动时，就会同步更新
+ 更新客户端的文件：在服务端**替换**对应的文件，客户端那边下次启动时，就会同步更新

不仅仅是文件，文件夹也是和上面一样的更新逻辑。这样，服务端的内容，就会自动同步到客户端那边。如果没有按预期更新，请检查一下对应的文件/目录是否忘了添加更新规则。

## 高级功能

[AdvancedTopic.md](AdvancedTopic.md ':include')