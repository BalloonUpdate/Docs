## 常见问题解答

### 360卫士报毒/拦截

`影响范围`：2.x全版本\~3.x全版本

`原因`：360误报危险文件，本程序相关所有代码均开源，请自行审查

`解决办法`：此问题无解，目前只能手动加入白名单

### 无文件更新直接跳过

```
程序启动后显示"校验文件.."然后直接就退出了
```

`影响范围`：3.x全版本

`原因`：可能性：

1. 所有文件已更新完毕/已是最新
2. 更新规则和实际文件结构不一致导致检测不到

`解决办法`：（任选其一）

1. 完整地重新按文档配置一次（注意不要遗漏任何步骤！）
2. 通过程序日志排查问题（[跳转链接](TroubleshootByLogs.md)）

### 所有文件被意外清空

```
程序误将Minecraft客户端mods等文件夹下的内容全部清空，即使放新文件进去也会被清空
```

`影响范围`：3.x全版本

`原因`：更新规则里列出的路径有问题，这个路径下没有任何文件所导致。因为本软件客户端是以同步的方式工作的，如果服务端没有任何文件，也会一同将客户端对应目录下的文件清空

`解决办法`：将需要被更新的文件放到服务端上**正确**的目录结构下（如果是静态服务端，不要忘记上传或者更新）

### HTTP请求/连接失败

```
HTTPResponseException(HTTP请求/连接失败(通常是网络原因))
```

`影响范围`：3.x全版本

`原因`：网络原因导致请求超时，从而判定为连接失败

`解决办法`：多次尝试启动，或者等网好一点时再试。如果实在不能解决，请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，如果出现文件下载对话框或者显示内容为yaml格式，则正常工作，其它情况请根据报错信息自行解决。

> 此报错和程序本身无关，通常是网络原因，不是程序BUG。

### MCDirectoryNotFoundException

```
MCDirectoryNotFoundException: The .minecraft directory not found.
```

`影响范围`：3.x全版本

`原因`：未将主程序放到相应的位置上，正确的位置：

+ `.minecraft`同级目录下
+ `.minecraft/`目录下
+ `.minecraft/updater/`目录下

主程序只能放在这几个位置，否则无法正常启动

注：配置文件只能放在`.minecraft/updater/updater.yml`，请不要随主程序移动

`解决办法`：将主程序移动到上面任意路径之一，都可以正常识别

### 找不到配置文件

```
ConfigFileNotFoundException(找不到配置文件)
```

`影响范围`：3.x全版本

`原因`：未将配置文件`updater.yml`放到`.minecraft/updater/updater.yml`

`解决办法`：将配置文件移动到正确的位置

### 服务端返回了无法解码的数据

```
UnableToDecodeException服务端返回了无法解码的数据(非yaml格式)
```

`影响范围`：3.x全版本

`原因`：服务端的配置不正确

`解决办法`：请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，如果出现文件下载对话框或者显示内容为yaml格式，则正常工作，其它情况请根据报错信息自行解决。

注：对话框中只会显示一小部分返回的内容，而且位置标记因为不是等宽字体的原因也无法准确反映错误位置，你可以打开日志文件`.minecraft/updater/updater.log`并滑到最下面或者搜索`RAWDATA`关键字，就能看到详细报错的行和列的位置

（[跳转链接](TroubleshootByLogs.md)）

### 连接关闭/传输中断

```
ConnectionClosedException连接关闭/传输中断(通常是网络原因)
```

`影响范围`：3.x全版本

`原因`：网络原因导致传输中断

`解决办法`：请等待5\~10分钟网络稳定以后再试

> 此报错和程序本身无关，通常是网络原因，不是程序BUG。

### 不正确的HTTP状态码

```
UnexpectedHttpCodeExcepetion不正确的HTTP状态码(未处于2xx-3xx之间)
```

`影响范围`：3.x全版本

`原因`：服务端并未返回正常的200状态码（即使是301或者302也不行）

`解决办法`：请手动在浏览器里打开对话框中以`http(s)://`开头的那个URL，并根据具体情况自行解决。

> 此报错和程序本身无关，而是HTTP服务器的问题，不是本程序的BUG。

### 未知的工作模式

```
UnknownWorkModeException未知的工作模式
```

`影响范围`：3.x全版本

`原因`：服务端配置文件里的`mode`设置不正确

`解决办法`：将服务端配置文件里的`mode`设置为下列值之一：`common`、`exist`

### 重定向次数过多

```
MaxRedirectionReachedException重定向次数过多
```

`影响范围`：3.x全版本

`原因`：HTTP3xx跳转次数过多（超过10次以上）此问题为HTTP服务器的技术性问题，与本软件无关！

`解决办法`：减少跳转次数

### 重定向出错

```
RedirectionFailedException重定向出错
```

`影响范围`：3.x全版本

`原因`：HTTP3xx响应头中找不到Location属性，无法完整此次跳转。此问题为HTTP服务器的技术性问题，与本软件无关！

`解决办法`：请寻求HTTP服务器管理员的帮助

### 更新规则带-号时不更新任何文件

`详情`：没有更新任何文件，而且日志里显示，带`-`符号的路径末尾出现一个`\n`

`影响范围`：服务端3.x（仅php服务端）

`原因`：php服务端的yaml解析程序的bug所导致

`解决方法`：（任选其一）

+ 避免更新路径里带有`-`符号，
+ 升级php服务端版本到3.1（客户端不用做任何改动）

### 有歧义的文件类型

```
AmbiguousFileTypeEeception(有歧义的文件类型(内部错误))
```

`影响范围`：3.x全版本

`原因`：小工具的bug所导致

`解决办法`：升级小工具的版本到v3.0.1

### check_hostname requires server_hostname

`影响范围`：小工具全版本，当使用腾讯对象存储上传文件时会触发

`原因`：电脑开启了代理上网导致，此问题属于腾讯COS SDK的问题（初步判断可能和requests库有关）

`解决方案`：尝试关闭代理，或者在虚拟机里使用小工具