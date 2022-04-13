## 配置一键启动

一键启动的作用：点击启动游戏按钮，自动弹出更新，更新完毕后，接着自动启动minecraft。玩家只要点击启动，会自动进行更新，不需要进行任何其它额外操作。

![dependently-start.gif](../assets/dependently-start.gif)

如果你的EXE文件没有放在`.minecraft`的同级目录，那么请修改下面对应的EXE文件路径到你的实际位置，否则一味死板地按着下面的文字来配置只会提示找不到文件

请将下方所有的`updater.exe`换成实际的文件名版本号

<!-- tabs:start -->

### **HMCL**

!> 一键启动不支持HMCL 3.2版本，请升级到3.3或者3.4版本

如果你使用较旧版本的HMCL，即不支持环境变量的版本，请按下面的教程进行操作。如果使用新版，也就是支持使用环境变量的版本，那么请参考下下面的新版教程

下面的教程不受版本隔离的影响

**较旧版本（不支持环境变量）：**

1. 启动HMCL，打开设置
2. 找到**启动前指令**（不是前置指令）这一项
3. 填写`updater.exe -s -u`
4. 启动游戏

---

**较新版本（支持环境变量）：**

1. 启动HMCL，打开设置
2. 找到**启动前指令**（不是前置指令）这一项
3. 填写`updater.exe -s -u`
4. 如果你将exe文件放到`.minecraft/update/`下，那么请填写`.minecraft/update/updater.exe -s -u`
5. 启动游戏

### **PCL2**

PCL2暂不支持启动前指令，无法做到全自动更新。只能使用PCL2的自定义界面的功能，在右侧增加一个"点击更新"的按钮，手动点击后，调用更新程序来手动更新文件

这里仅提供一个`Custom.xaml`文件示例

```xaml
<local:MyCard Title="客户端更新" Margin="0,0,0,15">
    <StackPanel Margin="25,40,23,15">
        <TextBlock TextWrapping="Wrap"
                   Text="点击下面的按钮可以检查客户端更新和修复客户端文件。如果无法进入游戏可以尝试点击下面的按钮来更新/修复。" />
        <local:MyButton Margin="0,8,0,8" Width="200" Height="35"
                   Text="检查更新" EventType="打开文件" EventData="{path}/updater-v3.1.3.exe" ToolTip="检查更新/修复文件" />
    </StackPanel>
</local:MyCard>
```

### **其它启动器**

配置“一键启动”需要你的启动器支持`启动前指令`这个功能，如果支持，请在启动前指令填写命令行`updater.exe -s -u`

不要忘记`-s -u`这两个参数，如果更新完毕后桌面有莫名其妙的黑框窗口，可以尝试去掉`-s`参数，只留下`-u`参数

<!-- tabs:end -->

## 参数说明

| 参数 | 说明                  |
| ---- | --------------------- |
| -s   | 不隐藏console窗口     |
| -u   | 减少console窗口的输出 |
