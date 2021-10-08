## 服务端配置文件示例

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