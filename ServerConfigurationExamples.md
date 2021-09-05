## 服务端配置文件示例

> 还是不太会吗，来看看配置文件示例吧

<!-- tabs:start -->

### **示例1**

需求：更新模组和资源包。更新`.minecraft/mods`和`.minecraft/resourcepacks`文件夹

普通写法：

```yaml
mode: common
paths:
  - .minecraft/mods
  - .minecraft/resourcepacks
```

正则写法：

```yaml
mode: common
paths:
  - "@\.minecraft/mods"
  - "@\.minecraft/resourcepacks"
```

### **示例2**

需求：只更新服务器提供的模组。我只想更新模组文件夹内以`server-`开头的服务器提供的模组文件，其它的模组文件开放给玩家自己添加

仅正则写法：

```yaml
mode: common
paths:
  - "@\.minecraft/mods/server-.*"
```

### **示例3**

需求：更新mods文件夹里所有.jar结尾文件。只更新.jar结尾的模组

有些模组会在mods文件夹里释放依赖库或者保存配置文件，为了避免误删，只需要更新.jar结尾的文件就好，其它类型的文件一律忽略

仅正则写法：

```yaml
mode: common
paths:
  - "@\.minecraft/mods/[^/]+\.jar"
```

### **示例4**

需求：更新启动器背景图片、模组文件。更新启动器背景图片、模组文件（以HMCL为例）

仅普通写法：

```yaml
mode: common
paths:
  - bg
  - .minecraft/mods
```

普通写法和正则写法混合使用：

```yaml
mode: common
paths:
  - bg
  - "@\\.minecraft/mods"
```

<!-- tabs:end -->