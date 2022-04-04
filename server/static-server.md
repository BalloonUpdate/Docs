## 静态服务端

在使用静态服务端前，请确保你熟悉以下内容，否则不建议使用静态服务端：

1. JSON语法
2. YAML语法
3. 超文本传输协议基本知识（尤其是常见错误代码）
4. 对象存储服务商提供的命令行工具，比如腾讯coscli、阿里ossutil（如果你使用对象存储的话）

首先下载服务端zip包，将`静态服务端`解压出来到任何地方

果你要更新模组文件：复制Minecraft客户端中所有的模组文件到`res/.minecraft/mods/`里（目录请自行创建），注意是所有文件

如果你要更新其它文件，同样按上面的方法，复制到`res`目录里对应的路径的目录上（比如vexview的贴图复制到`res/.minecraft/vexview/textures/`下，其它文件同理）

编辑服务端配置文件`updater/index.json`，在`common_mode`和`once_mode`下写上所有要进行更新的目录的路径，比如要更新模组文件和vexview的贴图文件可以这样写

```json
{
    "update": "res",
    "common_mode": [
        ".minecraft/mods/*.jar",
        ".minecraft/vexview/textures/**"
    ],
    "once_mode": []
}
```

+ `update`选项一般不要修改，这个选项指明了实际要更新的文件存放在哪个文件夹里
+ `common_mode`和`once_mode`选项的具体用法和更多示例可以[点击这里](reference.md)

到这里就配置完毕了，可以上传到对象存储/自己服务器了。如果是上传到对象存储服务，可以使用[新的上传方式](ossu.md)（推荐）。如果你觉得有困难或者是老用户，也可以使用[小工具上传](oss-tool.md)

记住，如果是上传到对象存储，上传完毕后就不要在网页端手动管理文件了，后续的文件管理请全程使用提供的工具完成，以确保文件状态的正确性

上传完成后，请在浏览器里访问`index.json`文件的URL，如果一切顺利，浏览器会显示`index.json`文件的内容。如果出现了403错误，那多半是桶的权限没有设置为公有读私有写。其它情况请根据服务商的文档进行排查

注意所有文件名中请不要包含下列字符，否则出现**服务端返回无法解码的数据**的错误请自己想办法：

[forbidden-chars.md](forbidden-chars.md ':include')

## 后续维护

得益于软件的同步式更新架构，后续的客户端维护其实是非常简单的：

+ 给客户端新增文件：在服务端**添加**对应的文件，然后进行一次同步/上传，客户端那边就会同步更新
+ 删除客户端的文件：在服务端**删除**对应的文件，然后进行一次同步/上传，客户端那边就会同步更新
+ 更新客户端的文件：在服务端**替换**对应的文件，然后进行一次同步/上传，客户端那边就会同步更新

不仅仅是文件，文件夹也是和上面一样的更新逻辑。这样，服务端的内容，就会自动同步到客户端那边。如果没有按预期更新，请检查一下对应的文件/目录是否忘了添加更新规则。
