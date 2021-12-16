1. 下载并解压客户端zip包，把主程序和配置文件一起解压到`.minecraft`同级目录下

![client-inside-updater](assets/client-inside-updater.png)

2. 打开并配置`updater.yml`
   1. 如果是单文件服务端：将单文件服务端输出API地址复制粘贴到`api`选项后面
   2. 如果是PHP服务端：将`index.php`的URL填到`api`选项后面
   3. 如果是静态服务端：将对象存储/服务器上的`index.yml`的URL填到`api`选项后面
3. 如果你喜欢，可以把客户端程序改成别的文件名（比如：`点击更新mods.exe`等等），但是，客户端程序只有放在以下路径才能正常工作：`.minecraft`同级目录(启动器旁)、`.minecraft/`下任意7层目录以下

![out_mcdir](assets/out_mcdir.png)

5. 到这里所有的安装工作已经结束了，开始启动测试效果吧！

---

额外说明：

1. log文件不能设置为隐藏、只读属性。你可以在配置文件里修改log文件的生成位置到`.minecraft/logs`里，或者禁用日志文件功能