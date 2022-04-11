## 基于JavaAgent的安卓端更新方案

课程运行环境要求：Java 8或更高

基于JavaAgent的移动端更新方案整体配置过程和配置`authlib`外置登录非常像，如果你有类似的经验，则很容易上手。教程这里以澪作为演示的示例

首先你需要参考[Jar客户端](jar-client.md)的教程，搭建并配置好一个可用的Jar客户端（版本需要大于等于4.1）

在PC端工作一切正常之后，将Jar客户端和配置文件（如果有）复制到安卓手机的`/sdcard/MioLauncher/LittleClient.jar`路径下（实际文件名如果包含中文，请删掉中文部分）

然后编辑`/sdcard/MioLauncher/MioConfig.json`文件，找到`extraJavaFlags`启动参数字段，修改成`-javaagent:/sdcard/MioLauncher/LittleClient.jar`，当然你也可以根据需要加入更多的参数，比如外置登录，或者内存参数等

如果你喜欢，上一步也可以在澪的界面里完成修改

然后就是很重要的一步，将游戏核心Jar文件，比如`/sdcard/MioLauncher/.minecraft/versions/1.12.2/1.12.2.jar`导出到电脑上，用压缩软件打开，删除`META-INF/`目录下的`MOJANGCS.RSA`和`MOJANGCS.SF`文件，然后保存zip文件并导回到手机上，如果不做这一步，一启动就会闪退

接着重启澪，然后启动游戏测试效果。如果你希望看到详细的日志输出过程，可以打开澪的开发者模式，启动游戏之后，点击“日志”按钮就可以看到详细更新过程了

### 关于配置文件

因为在移动端更新时无法像电脑端一样弹窗显示进度条，所以配置文件里的`auto-exit`选项不会生效

另外因为安卓API实现的问题，`modification-time-prioritized`选项也是处于失效状态，请不要开启，后续我会尝试解决这个问题

除了这两个以外，其它选项都可以正常使用

### 启动闪退问题

如果配置完毕后，启动立即闪退，那么请检查你的参数是否填写正确，或者文件是否放到了正确的位置的上

如果仍然不能解决，那么使用Pojav后端启动（Boat后端保存没有Pojav后端详细！），闪退后查看澪的日志文件`/sdcard/MioLauncher/latestlog.txt`

如果未经末尾提示这样的话，那多半就是指定路径找不到jar文件，你就需要检查文件是否放到位了没有

```
Error opening zip file or JAR manifest missing : /sdcard/MioLauncher/LittleClient-0.0.0.jar
Error occurred during initialization of VM
agent library failed to init
: instrument
--------- beginning of system
```

如果出现其它报错，请联系我

---

另外，如果配置没问题，但是因为网络原因，或者配置文件写错导致的更新过程中的任何细小的报错，也会导致游戏闪退，此时可以查看`/sdcard/MioLauncher/updater.log`日志文件排查相关问题

所以网络稍微有点不好就会导致闪退，请不要见怪