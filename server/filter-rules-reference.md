## 更新规则Reference

更新规则也叫文件过滤器，是用来告诉客户端更新哪些文件，不更新哪些的文件的。通常以`json`或者`yaml`格式出现，而且包含2个模式：`common_mode`和`once_mode`。这是两种不同的更新模式。把同一个更新路径写在不同的更新模式下，会有不同的更新策略。通常来说，`common_mode`使用的比较多。

> 所有的路径分隔符请使用正斜线，不要使用反斜线，即使是在Windows上

```yaml
# 此模式适合用来更新常规文件
common_mode: 
  - .minecraft/mods/*.jar # 只更新一级子目录下的.jar文件
  - .minecraft/vexview/textures/* # 只更新一级子目录下的任意后缀文件
  - .minecraft/vexview/textures/** # 更新任意级子目录下的任意后缀文件
  - .minecraft/vexview/textures/**/*.jar # 更新任意级子目录下的.jar文件

# 此模式适合用来补全配置文件
once_mode: []
```

## 更新模式

+ 写在`common_mode`下是最常用的做法，`common_mode`下所有的文件会被**更新**，这是我们最通俗的更新做法。一般用来更新模组，资源包，贴图等文件
+ 写在`once_mode`下时，仅当首次文件/文件夹不存在时会进行一次下载，如果后续文件存在，就会跳过更新不会覆盖已有内容。一般用来补全一些配置文件

注意，`common_mode`和`once_mode`的范围不要有重叠，否则会按`common_mode`模式进行更新

## 更新规则

更新规则类似一个相对路径，所以写起来很简单。如果要匹配一个目录下的所有文件，你可以使用星号来替代文件名，这种写法叫Glob表达式，星号叫通配符（wildcard），也是默认的写法。

如果Glob表达式不能实现你的需求，你可以在最前面加上一个`@`符号来转换成一个正则表达式。正则表达式支持更多的玩法，但也更加复杂。

### Glob表达式

Glob表达式虽然简单易用，但并非完美。当你的Glob表达式里包含了`[]`方括号的时候，会导致识别混乱，这是因为方括号在Glob表达式里有特别的含义，且无法转义

如果一定要包含方括号，请考虑使用中文括号`【】`或者使用正则表达式（方括号在正则里仍然有特殊含义，但是相比Glob表达式，正则里的方括号可以通过`\`反斜线转义来避免）

如果你对Glob表达式感兴趣，可以前往[wikipedia的页面](https://en.wikipedia.org/wiki/Glob_(programming))了解更多内容

### 正则表达式

相比使用Glob表达式，正则表达式能更精准地控制更新的文件，比如实现高级通配符操作或者排除指定文件/目录。当然也比Glob表达式复杂的多。

如果你之前从未接触过正则表达式，同时又对其非常感兴趣，可以参考这篇[正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)来快速学习正则表达式的基本用法。

使用正则表达式写很简单，只需要在路径最前面加上一个`@`符号就好了，加上`@`符号表明这是一条正则表达式，而不是Glob表达式

下面是一个栗子，它只更新mods下的所有.jar文件（非.jar结尾的文件通常是某个模组的依赖库，并不需要参与到更新当中）（这里和Glob表达式的`.minecraft/mods/*.jar`功能一模一样）

```yaml
common_mode: 
  - '@\.minecraft/mods/[^/]+\.jar'
once_mode: []
```

如果你喜欢，正则写法也可以和Glob表达式混合使用

```yaml
common_mode: 
  - '@\.minecraft/mods/[^/]+\.jar'
  - .minecraft/config/*.conf
once_mode: []
```

这里推荐一个在线正则表达式调试工具：https://tool.lu/regex/

需要注意的地方：

1. 请注意半角点`.` 的转义和正则本身的一些转义字符的影响
2. 路径不要以`./`开头，也不要以`/`结尾
3. 加上@后，记得使用单引号或者双引号包裹当前的值（不然会出现解析错误）

## 配置文件示例

> 还是不太会吗，来看看配置文件示例吧

### 示例1

需求：更新模组和资源包。更新`.minecraft/mods`和`.minecraft/resourcepacks`文件夹

Glob写法：

```yaml
common_mode: 
  - .minecraft/mods/*
  - .minecraft/resourcepacks/*
once_mode: []
```

正则写法：

```yaml
common_mode: 
  - "@\.minecraft/mods"
  - "@\.minecraft/resourcepacks"
once_mode: []
```

### 示例2

需求：只更新服务器提供的模组。同时不会更新玩家自己添加的模组

实现此需求的私聊是给所有服务器提供的模组的文件名统一加上一个前缀或者后缀，用来和区分玩家的Mod进行区分。个人比较推荐在所有服务器提供的模组的文件名的后面加上一个英文感叹号`!`作为后缀

如果需要批量重命名工具，可以加入交流群，在群文件中的`更新助手——辅助软件`文件夹里找到

Glob写法：

```yaml
common_mode: 
  - .minecraft/mods/*!.jar
once_mode: []
```

正则写法：

```yaml
common_mode: 
  - "@\.minecraft/mods/[^/]\!*\.jar"
once_mode: []
```

### 示例3

需求：更新mods文件夹里所有.jar结尾文件。只更新.jar结尾的模组

有些模组会在mods文件夹里释放依赖库或者保存配置文件，为了避免误删，只需要更新.jar结尾的文件就好，其它类型的文件一律忽略

Glob写法：

```yaml
common_mode: 
  - .minecraft/mods/*.jar
once_mode: []
```

正则写法：

```yaml
common_mode: 
  - "@\.minecraft/mods/[^/]+\.jar"
once_mode: []
```

### 示例4

需求：更新启动器背景图片、模组文件。更新启动器背景图片、模组文件（以HMCL为例）

仅Glob写法：

```yaml
common_mode: 
  - bg/*
  - .minecraft/mods/*.jar
once_mode: []
```

Glob写法和正则写法混合使用：

```yaml
common_mode: 
  - bg/*
  - "@\.minecraft/mods"
once_mode: []
```

### 示例5

需求：只更新除`exclude1.jar`和`exclude2.jar`以外的其它模组文件

仅正则写法：

```yaml
common_mode: 
    // 多个忽略的文件之间用竖线|隔开
  - "@\.minecraft/mods/(?!exclude1\.jar|exclude2\.jar).*\.jar"
once_mode: []
```
