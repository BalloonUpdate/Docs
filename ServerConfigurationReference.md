## 服务端配置参考

!> 所有的路径，请使用正斜杠作为目录分隔符，禁止使用反斜杠`\`，否则出了问题请自行解决！

```yaml
# 除了写目录的路径外，这里还可以写文件的路径（单独更新某个文件）
# common_mode适合用来更新常规文件
common_mode: 
  - .minecraft/mods/*.jar
  - .minecraft/vexview/textures/* # 如果这样写无法更新所有子文件和子目录，请尝试用.minecraft/vexview/textures/*.*代替

# 除了写目录的路径外，这里还可以写文件的路径（单独更新某个文件）
# once_mode适合用来补全配置文件
once_mode: []
```

把你要参与更新路径一行行写在`common_mode`或者`once_mode`下面，程序运行时就会检查更新你所列出的目录了。

程序分两种更新模式，`common`和`once`，把相同的路径写在`common_mode`或者`once_mode`下面会有不同的效果。

+ 写在`common_mode`下是最常用的做法，`common_mode`下所有的文件会被**更新**，这是我们最通俗的更新做法。一般用来更新模组，资源包，贴图等文件
+ 写在`once_mode`下会有所不同，once代表补全更新模式，仅当首次文件/文件夹不存在时会进行一次下载，如果后续文件存在，就会跳过更新。一般用来补全一些配置文件，缺失就下载，已存在但内容被修改过就会跳过，不会覆盖已有内容

至于`common_mode`和`once_mode`怎么写，请往下阅读。如果你是小白用户，不知道什么是正则表达式，请直接点击下面的Glob表达式，这是写起来最简单，最直观的一种方式。

>  顺便说一下：`once_mode` 的语法和`common_mode`的语法完全一致，都是均支持Glob表达式和正则表达式的（两种表达式也支持混合使用）。最后注意`common_mode`和`once_mode`的覆盖范围不要有重叠

<!-- tabs:start -->

### **用Glob表达式写**

所谓Glob表达式，就是指可以用通配符`*`、`?`等符号来匹配满足于要求的路径或者文件

举个例子：

```yaml
- .minecraft/mods/*.jar
```

这个Glob表达式会匹配mods目录下所有以jar结尾的文件，但不会匹配mods子目录下的jar文件。

能匹配：

```
.minecraft/mods/[区块动画]ChunkAnimator-MC1.12-1.2.jar
.minecraft/mods/[工业2]industrialcraft-2-2.8.188-ex112.jar
```

不能匹配：

```
.minecraft/mods/memory_repo/xx.jar
.minecraft/mods/1.12.2/chunkgenlimiter-1.1-core.jar
```

如果你想要匹配任意子目录下的jar文件可以这样写，`**`就代表零层或者任意层的子目录（虽然这样的需求用的很少）

```yaml
- .minecraft/mods/**/*.jar
```

如果要匹配任意后缀的话，可以这样写

```yaml
- .minecraft/mods/*
```

有关Glob表达式更多的用法，大家可以善用搜索引擎

### **用正则表达式写**

!> 注意！这是高级用法，相比Glob表达式复杂的多，如果你不知道正则的语法的话，请转而使用Glob表达式！当然也可以参考下这篇[正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)

除了使用Glob表达式外，还可以使用正则写法更精准地控制文件更新，比如实现高级通配符操作或者排除指定文件/目录

使用很简单，只需要在路径最前面加上一个`@`符号就好了，加上`@`符号表明这是一条正则表达式，而不是Glob表达式

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

在线正则表达式调试工具：https://tool.lu/regex/

需要注意的地方：

1. 请注意半角点`.` 的转义和正则本身的一些转义字符的影响
2. 路径不要以`./`开头，也不要以`/`结尾
3. 加上@后，记得使用单引号或者双引号包裹当前的值（不然会出现解析错误）
4. PHP服务端需要将所有单反斜线`\`替换成双反斜线`\\`(否则可能会出现解析错误)

<!-- tabs:end -->

## 配置文件示例

> 还是不太会吗，来看看配置文件示例吧

<!-- tabs:start -->

### **示例1**

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

### **示例2**

需求：只更新服务器提供的模组。我只想更新模组文件夹内以`server-`开头的服务器提供的模组文件，其它的模组文件开放给玩家自己添加

Glob写法：

```yaml
common_mode: 
  - .minecraft/mods/server-*.jar
once_mode: []
```

正则写法：

```yaml
common_mode: 
  - "@\.minecraft/mods/server-.*"
once_mode: []
```

### **示例3**

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

### **示例4**

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
  - "@\\.minecraft/mods"
once_mode: []
```

<!-- tabs:end -->