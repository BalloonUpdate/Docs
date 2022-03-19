## 问题排查

本章节教你如何通过日志来排查遇到的各种问题（覆盖率100%）

对于3.0.9之前的版本，暂时不支持通过日志排查问题

对于3.0.9-3.0.12版本的客户端，请点击[这里](https://github.com/updater-for-minecraft/Docs/blob/a5e2e8376d306bcb642ec1d0db5daa97e4bf2483/TroubleshootByLogs.md)来查阅历史版本

对于3.0.12-3.0.14之后的版本，请点击[这里](https://github.com/updater-for-minecraft/Docs/tree/v3.0.x#minecraft%E6%96%87%E4%BB%B6%E6%9B%B4%E6%96%B0%E5%8A%A9%E6%89%8B%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3)来查阅历史版本

对于3.1.0及之后的版本，请往下阅读

---

日志文件名：`updater.log`

使用任何文本编辑器打开日志文件（推荐使用等宽字体显示）

1. 使用搜索功能，定位到`更新路径匹配信息`所在位置

关键部分的日志，大概长这样

```
-----更新路径匹配信息(CommonMode)------
N:  -   .minecraft
N:  +       mods
N:  +           [3D声效]Sound-Physics-1.12.2.jar
N:  +           [JEI本体]jei_1.12.2-4.15.0.281.jar
N:  +           [JEI附属NEI风格]justenoughbuttons-1.12.2-1.2.3.jar
N:  +           [JEI附属拼音搜索]JustEnoughCharacters-1.12.0-3.4.3.jar
N:  +           [吸血鬼]Vampirism-1.12.2-1.5.2.jar.disabled
N:  +           [吸血鬼前置]Guide-API-1.12-2.1.8-63.jar.disabled
N:  +           [家具][1.12.2]MrCrayfish's+Furniture+-+6.3.1.jar
N:  +           [工业2]industrialcraft-2-2.8.188-ex112.jar
N:  +           [手柄支持]controllable-1.12.2-0.3.1.jar.disabled
N:  +           [旅行地图]journeymap-1.12.2-5.5.5.jar
N:  +           [星系]Galacticraft-Planets-1.12.2-4.0.2.244.jar.disabled
N:  +           [星系]GalacticraftCore-1.12.2-4.0.2.244.jar.disabled
N:  +           [星系]MicdoodleCore-1.12.2-4.0.2.244.jar.disabled
N:      b46da38920daaed19d912cbcc54c5054_2714005653360072542.gif
-------------------
O:  -   .minecraft
O:  +       mods
O:  +           [3D声效]Sound-Physics-1.12.2.jar
O:  +           [JEI本体]jei_1.12.2-4.15.0.281.jar
O:  +           [JEI附属NEI风格]justenoughbuttons-1.12.2-1.2.3.jar
O:  +           [JEI附属拼音搜索]JustEnoughCharacters-1.12.0-3.4.3.jar
O:  +           [吸血鬼]Vampirism-1.12.2-1.5.2.jar.disabled
O:  +           [吸血鬼前置]Guide-API-1.12-2.1.8-63.jar.disabled
O:  +           [家具][1.12.2]MrCrayfish's+Furniture+-+6.3.1.jar
O:  +           [工业2]industrialcraft-2-2.8.188-ex112.jar
O:  +           [手柄支持]controllable-1.12.2-0.3.1.jar.disabled
O:  +           [旅行地图]journeymap-1.12.2-5.5.5.jar
O:  +           [星系]Galacticraft-Planets-1.12.2-4.0.2.244.jar.disabled
O:  +           [星系]GalacticraftCore-1.12.2-4.0.2.244.jar.disabled
O:  +           [星系]MicdoodleCore-1.12.2-4.0.2.244.jar.disabled
O:      b46da38920daaed19d912cbcc54c5054_2714005653360072542.gif
```

这样的日志会先后显示两次，一次是CommonMode的日志，一次是OnceMode的日志

测试阶段的日志分两部分：

+ 上部分以`N:`开头，用来寻找需要`下载`的文件（`N`是`new`是首字母）
+ 下部分以`O:`开头，用来寻找需要`删除`的文件（`O`是`old`是首字母）

两个部分会依次遍历所有路径，如果路径被匹配为要参与更新的路径（命中更新规则），那么在路径的前面会用一个加号`+`或者减号`-`来表示，如果未能匹配，则是空白

+ `+`表示能直接匹配更新规则（能够被更新规则直接命中），通常是`文件`
+ `-`表示自己本身不能匹配更新规则，但是有某个子目录却能命中更新规则（间接匹配），通常是`目录`
+ **只要出现`+`或者`-`的任意一种，就算命中了更新规则，就会参与更新**

如果你希望更新的文件没有这些字样，或者根本找不到你要更新的文件名，那么请检查更新规则是否填写正确，检查文件结构是否放置到指定的位置上，并与更新规则一致。
