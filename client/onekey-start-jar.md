## 配置一键启动（传统）

一键启动的作用：点击启动游戏按钮，自动弹出更新，更新完毕后，接着自动启动minecraft。玩家只要点击启动，会自动进行更新，不需要进行任何其它额外操作

由于启动器不支持直接调用batch文件，所以我们首先需要下载一个[辅助软件](https://github.com/updater-for-minecraft/BatchRunner/releases)来让启动器调用Jar文件

下载最新版本的`batch-runner.exe`并放到`.minecraft`目录里，然后在`batch-runner.exe`文件的旁边新建一个文本文件`updater-script.bat`

打开`updater-script.bat`，文件并将下面的代码复制粘贴进去：

记得把`LittleClient-4.0.0.jar`件改成实际的文件名，如果你的文件名是中文的`文件更新助手-4.0.2.jar`，请改成英文。如果不想改，另一种方式是将`bat`文件以GBK或者GB2312保存，注意Windows10自带的记事本是保存的UTF-8

```bash
@echo off
java -jar LittleClient-4.0.0.jar > nul
```

然后把Jar客户端文件移动到`updater-script.bat`文件的旁边，接着按照下面不同启动器的做法，进行不同的步骤

<!-- tabs:start -->

### **HMCL**

1. 启动HMCL，打开设置
2. 找到**启动前指令**（不是前置指令）
3. 填写`.minecraft/batch-runner.exe -s -u`
4. 启动游戏

### **PCL2**

PCL2暂不支持启动前指令，无法做到全自动更新。只能使用PCL2的自定义界面的功能，在右侧增加一个"点击更新"的按钮，手动点击后，调用更新程序来手动更新文件

```xaml
<local:MyButton Margin="0,8,24,0" Width="160" Height="35" ColorType="Highlight" HorizontalAlignment="Center" Padding="13,0,13,0"
                Text="启动 Java 版更新助手" EventType="打开文件" EventData="{path}/.minecraft/batch-runner.exe|-x -u" />
```

<!-- tabs:end -->