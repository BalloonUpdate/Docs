## ForgeMod客户端

ForgeMod客户端是由[KasumiNova](https://github.com/KasumiNova)大佬基于Jar客户端开发的Forge模组版本的客户端，可作为一个模组被游戏加载。

下载地址：https://github.com/BalloonUpdate/ModClient/releases

1. 首先配置好一个可用的Jar客户端（指独立启动没问题）
2. 下载ForgeMod客户端并放到游戏的`mods`目录下
3. 复制Jar客户端的配置文件到模组的配置文件目录下`config/balloon-update.yml`（注意仍是`yml`后缀）放置到其它位置或者文件名不正确程序是读取不到的
4. 启动Minecraft测试效果

## 使用限制

ForgeMod客户端是一个ForgeCoreMod，这意味着无法对其它CoreMod进行更新，但是普通Mod仍然是可以更新的，CoreMod一般是各种mod的前置mod，这类mod都是处于比较底层的位置，在加载时可能会在ForgeMod客户端之前加载，可能会无法更新这些文件。但普通的Mod不此受影响。具体哪些是CoreMod，哪些是普通的Mod，需要自行测试。