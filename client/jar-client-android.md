## Android平台一键启动

运行环境要求：Java 8或更高

此更新方案整体配置过程和配置`authlib`外置登录非常像，如果你有类似的经验，则很容易上手。教程这里以澪作为示例，其它启动器大同小异

### 1.准备工作

首先PC机上配置好一个可用的Jar客户端（指独立启动没问题）

注意Jar客户端的版本需要大于等于4.1，只有4.1版本开始才支持作为`javaagent`参数启动

在PC端调试完毕后，从PC上将Jar客户端和配置文件（如果有）复制到手机的`/sdcard/MioLauncher/JarClient.jar`路径下（实际文件名如果包含中文，请删掉中文部分）

### 2.移除签名证书

接着启动澪。如果你还没有下载一个游戏版本，请下载一个游戏版本

将游戏核心Jar文件（只有一个），比如`/sdcard/MioLauncher/.minecraft/versions/1.12.2/1.12.2.jar`导出到电脑上

用压缩软件打开，删除`META-INF/`目录下的`MOJANGCS.RSA`和`MOJANGCS.SF`文件，然后保存并导回到手机上覆盖对应的文件（某些特殊情况下，此步骤不是必须的。但为保险起见，还是删掉比较稳妥，毕竟安卓端调试比较麻烦）

### 3.配置JVM参数

打开澪，切换到`游戏配置`页面，在游戏参数的最前面插入一段JVM参数`-javaagent:/sdcard/MioLauncher/JarClient.jar`（`JarClient.jar`文件名记得换成实际的文件名）

输入完毕后记得点击保存按钮

上面一步非常重要，请再输入完成后务必仔细检查，不能打错一个字，否则游戏直接闪退

如果你有多个`javaagent`参数，请确保位于所有参数的最前面

### 4.启动测试

接着重启澪，并启动游戏测试效果。如果你希望看到详细的日志输出过程，可以打开澪的开发者模式，启动游戏之后，点击“日志”按钮就可以看到详细更新过程了

如果希望看到完整的日志，可以查看`JarClient.jar`文件旁边的`balloon_update.txt`文件

## 更新性能优化

手机上的ARM处理器性能不及PC上的x86处理器那么强大，过多的文件更新会导致游戏启动速度变的非常慢

如果你的游戏启动非常慢，请查看日志窗口，判断是不是更新助手检查文件时间过长导致的，如果是，请往下阅读

手机上硬件资源有限，有些地方必须做出取舍，为此Jar客户端提供了部分可配置的参数来优化更新过程的性能：

1. 减少参与更新文件的总大小，文件总大小越大，检查更新花费的时间就越长，尽量缩减一些不必要的模组和文件，尤其是文件大小超过50Mb以上的模组，不光手机可能带不动，更新所花费的时间也会更长
2. 打开配置文件中的`check-modified`选项，大多数时候可以极大地提升文件检查效率，尤其是大文件场景下非常明显。具体说明请参考配置文件内的注释
3. 打开配置文件中的`version-cache`选项，开启后客户端每次更新完成后会把服务端的文件结构计算一个校验存起来，待下次更新时，服务端没有任何文件变动，则直接跳过本地文件检查过程。具体说明请参考配置文件内的注释



## 游戏闪退/崩溃

在移动端更新时无法像电脑端一样弹窗显示进度条，所以当出现问题后，只能以使Minecraft进程主动崩溃的方式告诉你更新失败了，所以如果发生了游戏闪退，请首先判断是不是因为更新失败造成的

你可以直接查看澪的`日志`页面，然后滑到底部。如果是因为更新导致的游戏主动崩溃，会有中文消息告诉你具体是什么原因，是网络问题，还是配置问题。如果是因为其它原因闪退，那么一般会出现大量的英文

如果你不希望在更新出现问题时直接闪退这种简单粗暴的机制，你可以在配置文件开启`no-throwing`选项。开启后如果遇到网络原因无法更新，就不会闪退，而是继续启动Minecraft。虽然不会闪退，但也可能因为服务器新增了模组而导致进不去服务器的情况，所以此选项请自行决定是否开启

---

如果配置完毕后，启动立即闪退，而且也没有看到任何Jar客户端输出的内容（内容一般是中文，很显眼），那么请检查你的参数是否填写正确，或者文件是否放到了正确的位置的上

如果仍然不能解决，那么使用Pojav后端启动，闪退后查看澪的日志文件`/sdcard/MioLauncher/latestlog.txt`

如果文件末尾提示这样的话，那多半就是指定路径找不到jar文件，你就需要检查文件是否放到位了没有

```
Error opening zip file or JAR manifest missing : /sdcard/MioLauncher/LittleClient-0.0.0.jar
Error occurred during initialization of VM
agent library failed to init
: instrument
--------- beginning of system
```

如果出现其它报错，请联系我