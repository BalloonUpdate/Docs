## Jar客户端

Jar客户端运行环境要求：Java 8或更高

首先把Jar客户端解压到启动器旁边，然后用压缩软件打开Jar包，把`config.yml`解压到Jar的旁边，并用文本编辑器打开

其中我们只需要修改`server`选项就好了，其它的选项都可以保持默认值

1. 如果是单文件服务端：将单文件服务端输出API地址复制粘贴到`server`选项后面
2. 如果是PHP服务端：将`index.php`的URL填到`server`选项后面
3. 如果是静态服务端：将`index.yml`的URL填到`server`选项后面

编辑好配置文件后，保存关闭这个文件，双击启动Jar测试效果

注意不要设置成默认使用压缩软件打开Jar文件了，要用`javaw.exe`或者`java.exe`设置成默认打开方式之后，双击启动！（一定要设置成默认打开方式，并用双击启动，否则可能会提示找不到.minecraft目录）。设置默认打开方式为Java后，软件的图标应该是一个Java的咖啡杯的样子

如果需要日志文件，可以查看Jar客户端文件旁的`firework_update.log`文件

---

如果你嫌`config.yml`配置文件影响美观，你可以将这个文件打包进Jar包并覆盖同名文件，这样软件就可以从可以从Jar包里读取了（记得把外面的配置文件删掉，否则会优先读取外面的配置文件）

---

更多玩法：[配置启动器一键启动](dependently-start-for-jar.md)、[安卓端热更新（Boat）](java-agent-based-mobile.md)
