## PHP服务端

1. 环境要求：PHP 7.4或者以上版本（不建议使用8.0）
2. 把`PHP服务端`文件夹里的所有文件，解压到网站根目录
3. 把你Minecraft客户端里**所有**的模组文件全部复制到`res/.minecraft/mods/`里面（目录请自行创建），注意不是只复制需要新增的文件，而是要复制所有文件
4. 将其它要更新的文件同样按上面的方法，复制到`res`目录里对应的路径的目录上（比如Vexview的贴图复制到`res/.minecraft/vexview/textures/`下，其它文件同理）
5. 编辑服务端配置文件`config.yml`，在`common_mode`和`once_mode`下写上所有需要参与更新路径，默认只有一个`mods`文件夹和vexview贴图目录

```yaml
# common_mode适合用来更新常规文件，详情请参阅服务端配置文件参考
# 路径分隔符只能使用正斜线
common_mode:
  - .minecraft/mods/*.jar
  - .minecraft/vexview/textures/**

# common_mode适合用来补全配置文件，详情请参阅服务端配置文件参考
# 路径分隔符只能使用正斜线
once_mode: []

# 使用php服务端需要将下面paths里面所有单反斜杠\全部换成双反斜杠\\
```

> 配置文件参考和更多示例请[点击这里](ServerConfigurationReference.md)（推荐阅读！）

6. 验证服务端是否正确工作（这一步很重要，请不要跳过）
7. 使用浏览器打开`index.php`的URL，如果浏览器显示了类似下面代码框里的`json`格式的内容（实际内容可能不完全相同）。那么恭喜，服务端配置无误！

```json
{
    "update": "index.php?purpose=update&source=res",
    "common_mode": [
        ".minecraft/mods/**",
    ],
    "once_mode": []
}
```

如果不是，请自行排查原因，因为这大概率不是程序BUG，而是你网络环境的问题！

如果一切配置正确，那么到这里服务端配置完毕，接下来请参考下方的客户端安装章节

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