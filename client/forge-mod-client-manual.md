## ForgeMod客户端

ForgeMod客户端是由[KasumiNova](https://github.com/KasumiNova)大佬基于 Jar 客户端开发的 Forge 模组版本的客户端，可作为一个模组被游戏加载。

下载地址：https://github.com/BalloonUpdate/ModClient/releases

1. 首先配置好一个可用的 JarClient 客户端（指独立启动没问题）
2. 下载 ForgeMod 客户端并放到游戏的 `mods` 目录下
3. 将 JarClient 客户端复制到游戏目录下，模组会自动检测文件并载入。注意：如果你修改了 JarClient 的名称，请在游戏目录下新建名为 `BalloonUpdateFileName.txt` 的文本文件，并输入你修改后的名称。（此处游戏目录均指 `.minecraft`，配置文件使用 JarClient 文件内部的配置）
4. 启动 Minecraft 测试效果

## 工作流程
- 1.12.2 版本的 BalloonUpdateModLoader 被作为 CoreMod 来加载，但是它比大部分的 CoreMod 要更早加载，以实现更新除猫反作弊之外的所有模组的功能。
- 1.13.2 - 1.16.5 版本的 BalloonUpdateModLoader 被作为 Service 来加载，但是它比大部分的 CoreMod 要更早加载，以实现更新所有模组的功能。

## 猫反作弊注意事项：
猫反作弊模组必须在本模组之前加载，否则会发生报错

解决方案：
1. 将猫反作弊文件名名称前添加 `!!`
2. 举例：`CatAntiCheat.jar` -> `!!CatAntiCheat.jar`
因 Forge 读取模组的顺序是按照名称读取的，因此此方法可以让 Forge 优先加载猫反，然后再加载 BaloonUpdateModLoader。

## 额外功能

要更新并删除旧版 JarClient，请在游戏目录下创建名为 `OldBalloonUpdateFileName.txt` 的文本文件，并输入旧版 JarClient 的文件名。

例如：

`JarClient 4.1.16.jar`

如果有多个客户端需要删除，请逐行输入。

例如：
```
JarClient 4.1.16.jar
JarClient 4.1.15.jar
```
